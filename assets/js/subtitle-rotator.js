// Subtitle Rotator - Animates through different roles
(function() {
	const roles = [
		'AI Engineer',
		'Robotics Engineer',
		'ML Engineer',
		'Computer Vision Engineer',
		'Deep Learning Researcher'
	];
	
	const rotatingText = document.getElementById('rotating-text');
	if (!rotatingText) return;
	
	let currentIndex = 0;
	let isTyping = false;
	let isDeleting = false;
	const typingSpeed = 100; // milliseconds per character
	const deletingSpeed = 50;
	const pauseDuration = 2000; // pause before deleting
	
	function typeText(text, callback) {
		isTyping = true;
		let charIndex = 0;
		rotatingText.textContent = '';
		
		const typeInterval = setInterval(() => {
			if (charIndex < text.length) {
				rotatingText.textContent += text[charIndex];
				charIndex++;
			} else {
				isTyping = false;
				clearInterval(typeInterval);
				setTimeout(callback, pauseDuration);
			}
		}, typingSpeed);
	}
	
	function deleteText(callback) {
		isDeleting = true;
		const currentText = rotatingText.textContent;
		let charIndex = currentText.length;
		
		const deleteInterval = setInterval(() => {
			if (charIndex > 0) {
				rotatingText.textContent = currentText.substring(0, charIndex - 1);
				charIndex--;
			} else {
				isDeleting = false;
				clearInterval(deleteInterval);
				callback();
			}
		}, deletingSpeed);
	}
	
	function animate() {
		const currentRole = roles[currentIndex];
		
		typeText(currentRole, () => {
			deleteText(() => {
				currentIndex = (currentIndex + 1) % roles.length;
				animate();
			});
		});
	}
	
	// Start animation after a short delay
	setTimeout(animate, 1000);
})();






