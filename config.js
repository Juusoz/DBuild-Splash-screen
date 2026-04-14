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

	// Motion effect (Ken Burns style)
	kenBurns: {
		enabled: true,

		// Maximum zoom (e.g. 1.2 = 20% zoom)
		maxZoom: 1.2,

		// Max pan offset as % of image (safe range auto-limited)
		maxPan: 0.1
	}

};