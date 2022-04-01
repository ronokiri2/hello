'use strict';
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".s45__section");
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
		trigger: ".s45__wrapper",
		pin: true,
		anticipatePin: 1,
		scrub: true,
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