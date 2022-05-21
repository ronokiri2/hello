'use strict';


// чтобы исправить баг с адаптивностью, я заменил vw(100) на x: 100%
// возможно, если использовать тут проценты а не переменные, то бага не будет
// в примерах gsap был способ обновления при ресайзе


gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".s4__section");
let maxWidth = 0;

const getMaxWidth = () => {
	maxWidth = 0;
	sections.forEach((section) => {
		maxWidth += section.offsetWidth; //400vw
	});
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
//window.innerWidth = 100vw
gsap.to(sections, {
	x: () => `-${maxWidth - window.innerWidth}`,
	ease: "none",
	scrollTrigger: {
		trigger: ".s4__container",
		pin: true,
		// anticipatePin: 1,
		scrub: 1,
		end: () => `+=${maxWidth}`,
		invalidateOnRefresh: true
	}
});



window.addEventListener('resize', function(event) {

	sections.forEach((sct, i) => {
		ScrollTrigger.create({
			trigger: sct,
			start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
			end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
			toggleClass: {targets: sct, className: "active"}
		});
	});

}, true);