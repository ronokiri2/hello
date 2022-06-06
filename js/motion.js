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
		transform: ["scale(0)", "scale(1)"],
	},
	{ 
		duration: 1,
		delay: 2
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

// Animate Progress Bar on Scroll
document.querySelector(".overlay2").animate(
	{
		transform: ["scale(1)", "scale(100)"]
	},
	{ 
		duration: 1, 
		fill: "forwards", 
		timeline: myScrollTimeline,
	}
);



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