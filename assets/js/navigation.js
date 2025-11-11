// Navigation Functionality
(function() {
	const mobileToggle = document.querySelector('.mobile-menu-toggle');
	const navLinks = document.querySelector('.nav-links');
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	
	// Set active link
	document.querySelectorAll('.nav-links a').forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPage || (currentPage === '' && href === 'index.html')) {
			link.classList.add('active');
		}
	});
	
	// Mobile menu toggle
	if (mobileToggle) {
		mobileToggle.addEventListener('click', () => {
			navLinks.classList.toggle('active');
			mobileToggle.classList.toggle('active');
		});
		
		// Close menu when clicking outside
		document.addEventListener('click', (e) => {
			if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
				navLinks.classList.remove('active');
				mobileToggle.classList.remove('active');
			}
		});
	}
	
	// Fade in animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);
	
	document.querySelectorAll('.fade-in').forEach(el => {
		observer.observe(el);
	});
})();

