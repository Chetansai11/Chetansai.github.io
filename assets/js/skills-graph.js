// Skills Web Graph Visualization
document.addEventListener('DOMContentLoaded', function() {
	const canvas = document.getElementById('skills-canvas');
	if (!canvas) return;

	const container = document.getElementById('skills-graph');
	const ctx = canvas.getContext('2d');
	
	// Set canvas size
	function resizeCanvas() {
		canvas.width = container.offsetWidth;
		canvas.height = container.offsetHeight;
		drawGraph();
	}
	
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas);

	// Skill nodes with positions and connections
	const skills = {
		// Core skills (center)
		core: [
			{ name: 'Python', x: 0.5, y: 0.5, proficiency: 95, connections: ['PyTorch', 'ROS 2', 'Computer Vision', 'Deep Learning'] },
		],
		// High proficiency skills
		high: [
			{ name: 'PyTorch', x: 0.3, y: 0.3, proficiency: 90, connections: ['Python', 'Deep Learning', 'CNN'] },
			{ name: 'ROS 2', x: 0.7, y: 0.3, proficiency: 88, connections: ['Python', 'C++', 'Motion Planning'] },
			{ name: 'Computer Vision', x: 0.2, y: 0.5, proficiency: 92, connections: ['Python', 'OpenCV', 'CNN'] },
			{ name: 'Deep Learning', x: 0.5, y: 0.2, proficiency: 90, connections: ['Python', 'PyTorch', 'Neural Networks'] },
		],
		// Medium proficiency skills
		medium: [
			{ name: 'C++', x: 0.8, y: 0.5, proficiency: 85, connections: ['ROS 2', 'Embedded Systems'] },
			{ name: 'OpenCV', x: 0.15, y: 0.65, proficiency: 87, connections: ['Computer Vision', 'Python'] },
			{ name: 'CNN', x: 0.25, y: 0.15, proficiency: 88, connections: ['PyTorch', 'Deep Learning'] },
			{ name: 'Motion Planning', x: 0.75, y: 0.15, proficiency: 85, connections: ['ROS 2', 'A*'] },
			{ name: 'Neural Networks', x: 0.45, y: 0.1, proficiency: 89, connections: ['Deep Learning', 'PyTorch'] },
			{ name: 'Embedded Systems', x: 0.85, y: 0.65, proficiency: 82, connections: ['C++', 'Arduino'] },
		],
		// Lower proficiency but important skills
		low: [
			{ name: 'A*', x: 0.7, y: 0.1, proficiency: 80, connections: ['Motion Planning'] },
			{ name: 'Arduino', x: 0.9, y: 0.7, proficiency: 78, connections: ['Embedded Systems'] },
			{ name: 'LSTM', x: 0.35, y: 0.25, proficiency: 85, connections: ['PyTorch', 'Neural Networks'] },
			{ name: 'Transformers', x: 0.4, y: 0.35, proficiency: 83, connections: ['Deep Learning', 'PyTorch'] },
			{ name: 'RRT*', x: 0.65, y: 0.2, proficiency: 82, connections: ['Motion Planning', 'ROS 2'] },
			{ name: 'LiDAR', x: 0.8, y: 0.4, proficiency: 80, connections: ['ROS 2', 'Computer Vision'] },
		]
	};

	// Flatten all skills
	const allSkills = [...skills.core, ...skills.high, ...skills.medium, ...skills.low];

	function drawGraph() {
		// Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw connections first (so nodes appear on top)
		allSkills.forEach(skill => {
			skill.connections.forEach(connName => {
				const connectedSkill = allSkills.find(s => s.name === connName);
				if (connectedSkill) {
					drawConnection(skill, connectedSkill);
				}
			});
		});

		// Draw nodes
		allSkills.forEach(skill => {
			drawNode(skill);
		});
	}

	function drawConnection(skill1, skill2) {
		const x1 = skill1.x * canvas.width;
		const y1 = skill1.y * canvas.height;
		const x2 = skill2.x * canvas.width;
		const y2 = skill2.y * canvas.height;

		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
		ctx.lineWidth = 1;
		ctx.stroke();
	}

	function drawNode(skill) {
		const x = skill.x * canvas.width;
		const y = skill.y * canvas.height;
		const radius = Math.max(30, skill.proficiency * 0.4);
		
		// Determine color based on proficiency
		let gradient;
		if (skill.proficiency >= 90) {
			gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
			gradient.addColorStop(0, '#06b6d4');
			gradient.addColorStop(1, '#8b5cf6');
		} else if (skill.proficiency >= 85) {
			gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
			gradient.addColorStop(0, '#0ea5e9');
			gradient.addColorStop(1, '#6366f1');
		} else if (skill.proficiency >= 80) {
			gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
			gradient.addColorStop(0, '#10b981');
			gradient.addColorStop(1, '#f59e0b');
		} else {
			gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
			gradient.addColorStop(0, '#8b5cf6');
			gradient.addColorStop(1, '#10b981');
		}

		// Draw node circle
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fillStyle = gradient;
		ctx.fill();
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
		ctx.lineWidth = 2;
		ctx.stroke();

		// Draw proficiency ring
		ctx.beginPath();
		ctx.arc(x, y, radius + 5, 0, (skill.proficiency / 100) * Math.PI * 2);
		ctx.strokeStyle = gradient;
		ctx.lineWidth = 3;
		ctx.stroke();

		// Draw skill name
		ctx.fillStyle = 'white';
		ctx.font = `${Math.max(10, radius * 0.3)}px Inter, sans-serif`;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(skill.name, x, y);
	}

	// Add interactivity
	canvas.addEventListener('mousemove', function(e) {
		const rect = canvas.getBoundingClientRect();
		const x = (e.clientX - rect.left) / canvas.width;
		const y = (e.clientY - rect.top) / canvas.height;

		let hoveredSkill = null;
		allSkills.forEach(skill => {
			const dx = x - skill.x;
			const dy = y - skill.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			const radius = Math.max(30, skill.proficiency * 0.4) / canvas.width;
			
			if (distance < radius) {
				hoveredSkill = skill;
			}
		});

		if (hoveredSkill) {
			canvas.style.cursor = 'pointer';
			// Highlight connections
			drawGraph();
			hoveredSkill.connections.forEach(connName => {
				const connectedSkill = allSkills.find(s => s.name === connName);
				if (connectedSkill) {
					ctx.beginPath();
					ctx.moveTo(hoveredSkill.x * canvas.width, hoveredSkill.y * canvas.height);
					ctx.lineTo(connectedSkill.x * canvas.width, connectedSkill.y * canvas.height);
					ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
					ctx.lineWidth = 2;
					ctx.stroke();
				}
			});
		} else {
			canvas.style.cursor = 'default';
		}
	});

	// Initial draw
	drawGraph();
});
