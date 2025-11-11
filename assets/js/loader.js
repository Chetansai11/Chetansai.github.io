// Loading Screen - Only show on first visit
(function() {
	// Check if this is the first visit in this session
	const hasVisited = sessionStorage.getItem('hasVisited');
	
	if (!hasVisited) {
		// First visit - show loader
		window.addEventListener('load', () => {
			const loader = document.querySelector('.loader');
			if (loader) {
				setTimeout(() => {
					loader.classList.add('hidden');
					setTimeout(() => {
						loader.style.display = 'none';
						sessionStorage.setItem('hasVisited', 'true');
					}, 500);
				}, 3000); // Show loader for 3 seconds
			}
		});
	} else {
		// Not first visit - hide loader immediately
		const loader = document.querySelector('.loader');
		if (loader) {
			loader.style.display = 'none';
		}
	}
})();
