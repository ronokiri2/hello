import { animate } from "motion"
import { scrollTimeline } from "./scrollTimeline.js"


animate(".preloader", 
	{ 
		opacity: 0,
		display: "none",
	},
	{ 
		duration: 0.2,
		delay: 2
	}
	).finished.then(() => {
		enableScroll2()
  })

animate(".header", 
	{ 
		opacity: ["0", "1"],
	},
	{ 
		duration: 1,
		delay: 2.6
	}
)
animate(".s1__wrapper", 
	{ 
		transform: ["scale(0.1)", "scale(1)"],
	},
	{ 
		duration: 1,
		delay: 2.3
	}
)



// Create ScrollTimeline
const myScrollTimeline = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: 'block',
    scrollOffsets: [
		{ target: document.querySelector(".s2"), edge: "start", threshold: 1 },
		{ target: document.querySelector(".s2"), edge: "end", threshold: 1 }
    ],
});

// Create ScrollTimeline
const myScrollTimeline2 = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: 'block',
    scrollOffsets: [
		{ target: document.querySelector(".s2"), edge: "start", threshold: 0.9 },
		{ target: document.querySelector(".s2"), edge: "start", threshold: 0.7 }
    ],
});

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari === true) {
	console.log("safari")
	// Animate svg on Scroll for Safari
	document.querySelector(".overlay3").animate(
		{
			transform: ["translate(-50%, -50%) scale(1)", "translate(-50%, -50%) scale(130)"],
			// width: ["100vw", "13000vw"],
			// height: ["100vh", "13000vh"]
		},
		{ 
			duration: 1, 
			fill: "forwards", 
			timeline: myScrollTimeline,
		}
	);
	document.querySelector(".s2").animate(
		{
			backgroundColor: ["#000000", "#FFFFFF"],
		},
		{ 
			duration: 1, 
			fill: "forwards", 
			timeline: myScrollTimeline2,
		}
	);
} else {
	console.log(" not safari")
	// Animate svg on Scroll for not Safari
	document.querySelector(".overlay3").animate(
		{
			transform: ["translate(-50%, -50%) scale(1)", "translate(-50%, -50%) scale(130)"],
		},
		{ 
			duration: 1, 
			fill: "forwards", 
			timeline: myScrollTimeline,
		}
	);
	document.querySelector(".s2").animate(
		{
			backgroundColor: ["#000000", "#FFFFFF"],
		},
		{ 
			duration: 1, 
			fill: "forwards", 
			timeline: myScrollTimeline2,
		}
	);
}





// анимация плавного скрытия прелоадера с блокировкой скролла

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

window.scrollTo( 0, 0 );
disableScroll();

function enableScroll2() {
	enableScroll();
}