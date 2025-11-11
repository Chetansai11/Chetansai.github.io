# Portfolio Website - Multi-Page Structure

A minimalistic, colorful portfolio website with dark theme support and signature loading screen.

## Structure

The website is split into separate pages:
- `index.html` - Home/Hero page with updates section
- `education.html` - Education and certifications
- `experience.html` - Professional experience and leadership
- `skills.html` - Technical skills
- `projects.html` - Projects showcase
- `contact.html` - Contact information
- `updates/` - Event detail pages (TAMU Datathon, Aggie Invent)

## Features

✅ **Minimalistic Design** - Clean, modern interface
✅ **Dark Theme Toggle** - Switch between light and dark modes
✅ **Signature Loading Screen** - Animated signature on page load
✅ **Colorful Accents** - 6 vibrant accent colors throughout
✅ **Responsive Design** - Works on all devices
✅ **Smooth Animations** - Fade-in effects and transitions

## Customization

### Adding Project Details

To add more details to projects, edit `assets/js/projects-data.js`. Each project can have:
- `title` - Project title
- `description` - Short description
- `image` - Image path
- `link` - GitHub/project link
- `tags` - Array of technology tags
- `details` - Detailed description (add when ready)
- `technologies` - Full list of technologies used
- `results` - Project results/achievements
- `date` - Project date

Example:
```javascript
{
	id: 1,
	title: "Brain Tumor Segmentation",
	description: "W-Net and deep neural networks for medical image segmentation.",
	image: "images/thumbs/07.jpg",
	link: "https://github.com/Chetansai11/BRAIN_TUMOR_SEGMENTATION",
	tags: ["PyTorch", "Computer Vision", "Medical Imaging"],
	details: "Detailed project description here...",
	technologies: ["PyTorch", "Python", "OpenCV", "Medical Imaging"],
	results: "Achieved 95% accuracy in tumor segmentation",
	date: "2023"
}
```

### Customizing Signature

The signature loading screen uses:
- Hexagon logo with "AH" letters (currently placeholder)
- Signature text "Chetan Sai Borra"

To customize:
1. Replace the hexagon SVG in each HTML file's loader section
2. Update the signature text in the `.signature-text` div
3. Add your signature image to the `images/` folder and reference it

### Theme Colors

Edit `assets/css/custom.css` to change accent colors:
```css
--accent-1: #3b82f6; /* Blue */
--accent-2: #8b5cf6; /* Purple */
--accent-3: #ec4899; /* Pink */
--accent-4: #f59e0b; /* Amber */
--accent-5: #10b981; /* Green */
--accent-6: #ef4444; /* Red */
```

## File Structure

```
├── index.html
├── education.html
├── experience.html
├── skills.html
├── projects.html
├── contact.html
├── updates/
│   ├── tamu-datathon.html
│   └── aggie-invent.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── custom.css
│   ├── js/
│   │   ├── theme.js (dark theme toggle)
│   │   ├── loader.js (loading screen)
│   │   ├── navigation.js (navigation functionality)
│   │   └── projects-data.js (project data structure)
│   └── ...
└── images/
    └── ...
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Theme preference is saved in localStorage
- Loading screen shows for 3 seconds
- All pages share the same navigation and footer
- Smooth scroll navigation between sections

