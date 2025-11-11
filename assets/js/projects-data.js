// Projects Data Structure - Easy to expand with more details
const projectsData = [
	{
		id: 1,
		title: "Brain Tumor Segmentation",
		description: "W-Net and deep neural networks for medical image segmentation.",
		image: "images/thumbs/07.jpg",
		link: "https://github.com/Chetansai11/BRAIN_TUMOR_SEGMENTATION",
		tags: ["PyTorch", "Computer Vision", "Medical Imaging"],
		// Add more details here when provided:
		// details: "",
		// technologies: [],
		// results: "",
		// date: ""
	},
	{
		id: 2,
		title: "Meal Nutrition Analysis",
		description: "Multimodal CNN+LSTM approach for nutrition estimation.",
		image: "images/thumbs/08.jpg",
		link: "https://github.com/Chetansai11/MEAL_NUTRITION_ANALYSIS",
		tags: ["PyTorch", "CNN", "LSTM"]
	},
	{
		id: 3,
		title: "Vision Transfer Learning",
		description: "DeiT-based image classification with augmentation and fine-tuning.",
		image: "images/thumbs/10.jpg",
		link: "https://github.com/Chetansai11/DeiT_based_Image_Classification",
		tags: ["Transformers", "Transfer Learning", "PyTorch"]
	},
	{
		id: 4,
		title: "Face Tracking Robot",
		description: "3-wheeled robot with pan-tilt mechanism and vision-based tracking.",
		image: "images/thumbs/12.jpg",
		link: "https://github.com/Chetansai11/Face-Tracking-Robot",
		tags: ["Robotics", "OpenCV", "ROS2"]
	},
	{
		id: 5,
		title: "Cartpole using Q-learning",
		description: "Reinforcement learning implementation for cartpole control.",
		image: "images/thumbs/09.jpg",
		link: "https://github.com/Chetansai11/cartpole_Q-learning",
		tags: ["Reinforcement Learning", "Q-Learning", "Python"]
	},
	{
		id: 6,
		title: "Health Monitoring & Heart Stroke Prediction",
		description: "IoT-based health monitoring system with ML prediction.",
		image: "images/thumbs/11.jpg",
		link: "https://github.com/Chetansai11/Health-Monitoring-and-Heart-Stroke-Prediction",
		tags: ["IoT", "Machine Learning", "ESP32"]
	}
];

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
	module.exports = projectsData;
}

