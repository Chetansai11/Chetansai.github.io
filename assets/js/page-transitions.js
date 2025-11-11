// Smooth Page Transitions - SPA-like experience
(function() {
	let isTransitioning = false;
	
	// Handle page load - fade in content
	window.addEventListener('DOMContentLoaded', function() {
		// Animate page content on load
		const main = document.querySelector('main');
		if (main) {
			main.style.opacity = '0';
			main.style.transform = 'translateY(20px)';
			
			requestAnimationFrame(() => {
				setTimeout(() => {
					main.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
					main.style.opacity = '1';
					main.style.transform = 'translateY(0)';
				}, 100);
			});
		}
		
		// Animate fade-in elements
		const fadeElements = document.querySelectorAll('.fade-in');
		fadeElements.forEach((el, index) => {
			el.style.opacity = '0';
			el.style.transform = 'translateY(20px)';
			
			setTimeout(() => {
				el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
				el.style.opacity = '1';
				el.style.transform = 'translateY(0)';
			}, 200 + (index * 100));
		});
	});
	
	// Prevent default link behavior and handle transitions
	document.addEventListener('click', function(e) {
		const link = e.target.closest('a');
		if (!link) return;
		
		const href = link.getAttribute('href');
		
		// Skip if:
		// - External link
		// - Anchor link
		// - Target blank
		// - Already transitioning
		// - Not an HTML page
		if (!href || 
			href.startsWith('#') || 
			href.includes('mailto:') || 
			href.includes('http') && !href.includes(window.location.hostname) ||
			link.getAttribute('target') === '_blank' ||
			isTransitioning ||
			!href.endsWith('.html') && !href.includes('/') && href !== 'index.html') {
			return;
		}
		
		// Check if it's an internal link
		const isInternal = !href.includes('http') || href.includes(window.location.hostname);
		if (!isInternal) return;
		
		e.preventDefault();
		transitionToPage(href);
	});
	
	function transitionToPage(url) {
		if (isTransitioning) return;
		isTransitioning = true;
		
		// Create transition overlay
		const overlay = document.createElement('div');
		overlay.className = 'page-transition-overlay';
		document.body.appendChild(overlay);
		
		// Fade out current page
		requestAnimationFrame(() => {
			setTimeout(() => {
				overlay.classList.add('active');
				
				// After fade out, navigate
				setTimeout(() => {
					window.location.href = url;
				}, 300);
			}, 10);
		});
	}
	
	// Handle browser back/forward buttons
	window.addEventListener('popstate', function() {
		// Reload to ensure smooth transition
		window.location.reload();
	});
})();
