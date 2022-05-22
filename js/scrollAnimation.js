'use strict';

// нужен для того, чтобы увеличивающийся svg не становился размытым в Safari
gsap.config({
	force3D: false
});

gsap.registerPlugin(ScrollTrigger);

const vh = (coef) => window.innerHeight * (coef/100);
const vw = (coef) => window.innerWidth * (coef/100);



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

gsap.to(".preloader", {
	opacity: 0,
	duration: 0.2,
	display: "none",
	delay: 2,
	onComplete: enableScroll2
});

function enableScroll2() {
	enableScroll();
}



// Увеличение svg в 130 раз по кастомному изингу
gsap.to(".overlay2", {
	scale: 130,
	ease: "none",
	scrollTrigger: {
		trigger: ".s2",
		start: "top top",
		end: "+=200%",
		scrub: 1
	}
});

// анимация s1
gsap.from(".header", {
	opacity: 0,
	delay: 2.8,
});
gsap.from(".s1__wrapper", {
	scale: 0.272197962,
	duration: 1,
	delay: 2,
	ease: "circ.out"
});
gsap.from(".s1__h1", {
	opacity: 0,
	delay: 2.5
});
gsap.from(".s1__h2", {
	opacity: 0,
	delay: 2.5
});		
gsap.from(".s1__button", {
	opacity: 0,
	delay: 2.5
});

gsap.set(".s9", {backgroundColor: "#010516"});

// изменение цвета фона s6 s7 s8 s9
gsap.to(".s6, .s7, .s8, .s9", {
	backgroundColor: "#EBECF0",
	scrollTrigger: {
		trigger: ".s9",
		start: "top bottom",
		toggleActions: "play none none reverse",
		duration: 0.1
	}
});


ScrollTrigger.matchMedia({
	"(max-width: 699px)"() {
		gsap
		.timeline({
			scrollTrigger: {
				trigger: ".s2",
				scrub: true,
				start: "10% top",
				end: "+=30%",
				invalidateOnRefresh: true
			}
		})
		.fromTo(
			".s2",
			{
				backgroundColor: "black"
			},
			{ backgroundColor: "white", ease: "none" },
			0
		);
		

		gsap.from(".footer-container", {
			yPercent: vw(2),
			scrollTrigger: {
				trigger: ".s9",
				start: "bottom bottom",
				end: '+=' + vw(134.0625),
				toggleActions: "play none none reverse",
				scrub: true,
			}
		});
	},





	"(min-width: 700px)"() {
		gsap
		.timeline({
			scrollTrigger: {
				trigger: ".s2",
				scrub: true,
				start: "18% top",
				end: "+=10%"
			}
		})
		.fromTo(
			".s2",
			{
				backgroundColor: "black"
			},
			{ backgroundColor: "white", ease: "none" },
			0
		);
	}
})
