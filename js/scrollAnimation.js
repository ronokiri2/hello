ScrollTrigger.matchMedia({
	"(min-width: 700px)"() {

		gsap.config({
			force3D: false
		});

		gsap.registerPlugin(ScrollTrigger);

		const vh = (coef) => window.innerHeight * (coef/100);
		const vw = (coef) => window.innerWidth * (coef/100);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".overlay2",
				start: "top top",
				end: "+=200%",
				scrub: true
			}
		});
		

		// Увеличение svg в 130 раз по кастомному изингу
		tl.to(".overlay2", {
			scale: 130, 
			duration: 1, 
			ease: CustomEase.create("custom", "M0,0,C0.486,0.054,0.234,0.2,0.49,0.488,0.686,0.709,0.78,1,1,1")
		});
		
		gsap
		.timeline({
		  scrollTrigger: {
			trigger: ".s2",
			scrub: true,
			start: "top top",
			end: "center bottom"
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
			delay: 2
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



		// sticky анимация постеров по скроллу
		ScrollTrigger.create({
			trigger: ".js1",
			start: "top top", 
			end: "223.4375%",
			pin: ".js1",
			anticipatePin: 1 
		});

		ScrollTrigger.create({
			trigger: ".js2",
			start: "top top", 
			end: "223.4375%",
			pin: ".js2",
			anticipatePin: 1 
		});

		ScrollTrigger.create({
			trigger: ".js3",
			start: "top top", 
			end: "111.71875%",
			pin: ".js3",
			anticipatePin: 1 
		});

		ScrollTrigger.create({
			trigger: ".js4",
			start: "top top", 
			end: "111.71875%",
			pin: ".js4",
			anticipatePin: 1 
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



	}
})

