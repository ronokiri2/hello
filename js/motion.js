import { animate } from "motion"
import { scrollTimeline } from "./scrollTimeline.js"


// first screen animation
animate(".preloader", 
	{ 
		opacity: 0,
		display: "none",
	},
	{ 
		duration: 0.2,
		delay: 5
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
		delay: 5.6
	}
)
animate(".s1__wrapper", 
	{ 
		transform: ["scale(0.1)", "scale(1)"],
	},
	{ 
		duration: 1,
		delay: 5
	}
)



// для смартфонов наверное нужно будет создать еще таймлайн

// timelines
const s2Logo = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: 'block',
	scrollOffsets: [
		{ target: document.querySelector(".s2"), edge: "start", threshold: 1 },
		{ target: document.querySelector(".s2__header"), edge: "start", threshold: 1 }
	],
});
const s2BgColor = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: 'block',
	scrollOffsets: [
		{ target: document.querySelector(".s2__posters"), edge: "end", threshold: 0.1 },
		{ target: document.querySelector(".s2__posters"), edge: "end", threshold: 0.4 }
	],
});
const s2BgColorMobile = new ScrollTimeline({
	source: document.documentElement,
	scrollSource: document.documentElement, // For legacy implementations
	orientation: 'block',
	scrollOffsets: [
		{ target: document.querySelector(".s2__posters"), edge: "end", threshold: 0.1 },
		{ target: document.querySelector(".s2__posters"), edge: "end", threshold: 0.2 }
	],
});

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// 700+ PX
if (window.matchMedia("(min-width: 700px)").matches) {

	if (isSafari === true) {
		document.querySelector(".overlay2").animate(
			{
				transform: ["scale(0.2)", "scale(16)"]
			},
			{ 
				duration: 1, 
				fill: "forwards", 
				timeline: s2Logo,
				easing: "cubic-bezier(.86,.09,.83,.67)"
			}
		);
	} else {
		document.querySelector(".overlay2").animate(
			{
				transform: ["scale(1)", "scale(80)"],
			},
			{ 
				duration: 1, 
				fill: "forwards", 
				timeline: s2Logo,
				easing: "cubic-bezier(.86,.09,.83,.67)"
			},
		);
	}

	document.querySelector(".s2").animate(
		{
			backgroundColor: ["#000000", "#FFFFFF"],
		},
		{ 
			duration: 1,
			fill: "forwards", 
			timeline: s2BgColor,
			easing: "linear"
		}
	);



	// <700 PX
} else {
	document.querySelector(".overlay2").animate(
		{
			transform: ["scale(1)", "scale(80)"],
		},
		{ 
			duration: 1, 
			fill: "forwards", 
			timeline: s2Logo,
			easing: "cubic-bezier(.86,.09,.83,.67)"
		},
	);

	document.querySelector(".s2").animate(
		{
			backgroundColor: ["#000000", "#FFFFFF"],
		},
		{ 
			fill: "forwards", 
			timeline: s2BgColorMobile,
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