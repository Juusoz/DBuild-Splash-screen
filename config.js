// ===========================
// SLIDESHOW CONFIG
// ===========================

const CONFIG = {

	// Page title (browser tab)
	title: "DBuild Splash Screen",

	// Transition direction
	// Options: "left", "right", "top", "bottom", "fade"
	mode: "fade",

	// Slide behavior:
	// "overlay" = new image slides on top
	// "push"= old image slides out with new one
	slideStyle: "overlay",

	// Time each image stays visible (ms)
	displayTime: 5000,

	// Slide animation duration (ms)
	transitionTime: 1000,

	// Fade duration (only used in "fade" mode)
	fadeDuration: 5000,

	// Start from a random image
	startRandom: true,

	// ===========================
	// MOTION SETTINGS
	// ===========================

	enableMotion: true,

	// Zoom range (must be >1 to avoid edges)
	minZoom: 1.1,
	maxZoom: 1.25,

	// Rotation (degrees)
	maxRotation: 5,

	enablePan: true,
	enableZoom: true,
	enableRotate: true
};