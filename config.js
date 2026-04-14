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
  // "push"    = old image slides out with new one
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
	motion: {
	  enabled: true,

	  // Zoom range (1 = no zoom)
	  zoomMin: 1.05,
	  zoomMax: 1.15,

	  // Max pan offset (% of image size)
	  panMax: 10,

	  // Duration should match or exceed displayTime
	  duration: 6000
	}

};