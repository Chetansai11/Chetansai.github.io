// Theme Toggle Functionality
(function() {
	const themeToggle = document.querySelector('.theme-toggle');
	const currentTheme = localStorage.getItem('theme') || 'dark';
	
	// Set initial theme (default: modern dark)
	document.documentElement.setAttribute('data-theme', currentTheme);
	
	if (themeToggle) {
		// Update icon based on theme
		updateThemeIcon(currentTheme);
		
		themeToggle.addEventListener('click', () => {
			const currentTheme = document.documentElement.getAttribute('data-theme');
			const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
			
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			updateThemeIcon(newTheme);
		});
	}
	
	function updateThemeIcon(theme) {
		if (!themeToggle) return;
		
		const icon = themeToggle.querySelector('svg') || document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		
		if (!themeToggle.querySelector('svg')) {
			icon.setAttribute('width', '20');
			icon.setAttribute('height', '20');
			icon.setAttribute('viewBox', '0 0 24 24');
			icon.setAttribute('fill', 'none');
			icon.setAttribute('stroke', 'currentColor');
			icon.setAttribute('stroke-width', '2');
			themeToggle.innerHTML = '';
			themeToggle.appendChild(icon);
		}
		
		icon.innerHTML = theme === 'dark'
			? '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
			: '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
	}
})();

