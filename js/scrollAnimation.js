'use strict';

// нужен для того, чтобы увелчивающийся svg не становился размытым в Safari
gsap.config({
	force3D: false
});

gsap.registerPlugin(ScrollTrigger);

const vh = (coef) => window.innerHeight * (coef/100);
const vw = (coef) => window.innerWidth * (coef/100);


ScrollTrigger.matchMedia({
	"(max-width: 699px)"() {

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".overlay2",
				start: "top top",
				end: "+=200%",
				scrub: 1
			}
		});
		

		// Увеличение svg в 130 раз по кастомному изингу
		tl.to(".overlay2", {
			scale: 130,
			ease: CustomEase.create("custom", "M0,0,C0.486,0.054,0.234,0.2,0.49,0.488,0.686,0.709,0.78,1,1,1")
		});
		
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




		// gsap.set('.footer-container', { yPercent: 0 })

		// const uncover = gsap.timeline({ paused:true })

		// uncover.to('.footer-container', { yPercent: 0, ease: "none" });

		// ScrollTrigger.create({  
		// trigger: '.s9',
		// start: 'bottom bottom',
		// end: '+=' + vw(134.0625),
		// animation: uncover,
		// scrub: true
		// })

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

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".overlay2",
				start: "top top",
				end: "+=200%",
				scrub: 1
			}
		});
		

		// Увеличение svg в 130 раз по кастомному изингу
		tl.to(".overlay2", {
			scale: 130,
			ease: CustomEase.create("custom", "M0,0,C0.486,0.054,0.234,0.2,0.49,0.488,0.686,0.709,0.78,1,1,1")
		});
		
		gsap
		.timeline({
			scrollTrigger: {
				trigger: ".s2",
				scrub: true,
				start: "18% top",
				end: "+=10%",
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


		// gsap.set('.footer-container', { yPercent: -vw(0) })

		// const uncover = gsap.timeline({ paused:true })

		// uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

		// ScrollTrigger.create({  
		// trigger: '.s9',
		// start: 'bottom bottom',
		// end: '+=' + vw(12.0117188),
		// animation: uncover,
		// scrub: true
		// })

		gsap.from(".footer-container", {
			yPercent: vw(2),
			scrollTrigger: {
				trigger: ".s9",
				start: "bottom bottom",
				end: '+=' + vw(12.0117188),
				toggleActions: "play none none reverse",
				scrub: true,
			}
		});
	}
})

