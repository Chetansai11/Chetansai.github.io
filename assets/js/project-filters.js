// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
	const filterButtons = document.querySelectorAll('.filter-btn');
	const projectCards = document.querySelectorAll('.project-card');
	const projectsGrid = document.getElementById('projects-grid');

	filterButtons.forEach(button => {
		button.addEventListener('click', function() {
			const filter = this.getAttribute('data-filter');

			// Update active button
			filterButtons.forEach(btn => btn.classList.remove('active'));
			this.classList.add('active');

			// Filter projects
			projectCards.forEach(card => {
				const category = card.getAttribute('data-category');
				
				if (filter === 'all' || category === filter) {
					card.style.display = 'block';
					setTimeout(() => {
						card.style.opacity = '1';
						card.style.transform = 'scale(1)';
					}, 10);
				} else {
					card.style.opacity = '0';
					card.style.transform = 'scale(0.8)';
					setTimeout(() => {
						card.style.display = 'none';
					}, 300);
				}
			});
		});
	});

	// Initialize all projects as visible
	projectCards.forEach(card => {
		card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
		card.style.opacity = '1';
		card.style.transform = 'scale(1)';
	});
});
