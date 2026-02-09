// Skills Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
	const filterButtons = document.querySelectorAll('[data-skill-filter]');
	const skillCategories = document.querySelectorAll('.skill-category');

	filterButtons.forEach(button => {
		button.addEventListener('click', function() {
			const filter = this.getAttribute('data-skill-filter');

			// Update active button
			filterButtons.forEach(btn => btn.classList.remove('active'));
			this.classList.add('active');

			// Filter skill categories
			skillCategories.forEach(category => {
				const categoryType = category.getAttribute('data-skill-category');
				
				if (filter === 'all' || categoryType === filter || categoryType === 'all') {
					category.style.display = 'block';
					setTimeout(() => {
						category.style.opacity = '1';
						category.style.transform = 'translateY(0)';
					}, 10);
				} else {
					category.style.opacity = '0';
					category.style.transform = 'translateY(-20px)';
					setTimeout(() => {
						category.style.display = 'none';
					}, 300);
				}
			});
		});
	});

	// Initialize all categories as visible
	skillCategories.forEach(category => {
		category.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
		category.style.opacity = '1';
		category.style.transform = 'translateY(0)';
	});
});
