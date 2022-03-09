ScrollTrigger.matchMedia({
	"(min-width: 700px)"() {

		gsap.registerPlugin(ScrollTrigger);

		// gsap.to(".s2__svg", {
		// 	scrollTrigger: ".s2__svg",
		// 	x: 400,
		// 	start: "top top",
		// 	rotation: 360,
		// 	duration: 3
		// });
		const vh = (coef) => window.innerHeight * (coef/100);
		const vw = (coef) => window.innerWidth * (coef/100);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".s2__svg-perehod",
				start: "center center",
				end: "+=200%",
				scrub: true,
				pin: true,
				anticipatePin: 1 
			}
		});
		
		// Увеличение svg в 130 раз по кастомному изингу
		tl.to(".s2__svg-perehod", {
			scale: 130, 
			duration: 1, 
			ease: CustomEase.create("custom", "M0,0,C0.486,0.054,0.234,0.2,0.49,0.488,0.686,0.709,0.78,1,1,1"),
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
			delay: 1
		});
		gsap.from(".s1__wrapper", {
			scale: 0.272197962,
			duration: 1,
		});
		gsap.from(".s1__h1", {
			opacity: 0,
			delay: 1
		});
		gsap.from(".s1__h2", {
			opacity: 0,
			delay: 1
		});		
		gsap.from(".s1__button", {
			opacity: 0,
			delay: 1
		});
		gsap.from(".s1__img", {
			opacity: 0,
			delay: 1
		});

		// Меняет цвет бэкраунда s2 на черный
		// черный в css не установлен на случай если не загрузится js или сломается

		// gsap.to(".s2", {
		// 	backgroundColor: "black",
		// 	scrollTrigger: {
		// 		trigger: ".s1",
		// 		start: "top top",
		// 		end: "+=1%",
		// 		scrub: true
		// 	}
		// });



		

		
		
		
		// // background color animation
		// gsap.to(".s2", {
		// 	backgroundColor: "white",
		// 	scrollTrigger: {
		// 	trigger: ".s2",
		// 	  start: "top top-=600px",
		// 	  end: "+=40%",
		// 	  scrub: true
		// 	}
		//   });

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
			// 27.2135417vw

			// 836px 1024px

			// 122.488038278%

			// 1024 px = 33.3333333vw
			// margin 3.90625vw = 11.71875%
		// ScrollTrigger.create({
		// 	trigger: ".js5",
		// 	start: "top top", 
		// 	end: "+40%",
		// 	pin: ".js5"
		// });

		// ScrollTrigger.create({
		// 	trigger: ".js6",
		// 	start: "top top", 
		// 	end: "+40%",
		// 	pin: ".js6"
		// });



		// gsap.to(".first-row", {
		// 	xPercent: 30,
			
		// 	scrollTrigger: {
		// 		trigger: ".first-row",
		// 		start: "top bottom",
		// 		scrub: true
		// 	}
		// });

		// gsap.to(".second-row", {
		// 	xPercent: -30,
			
		// 	scrollTrigger: {
		// 		trigger: ".second-row",
		// 		start: "top bottom",
		// 		scrub: true
		// 	}
		// });

		// gsap.to(".third-row", {
		// 	xPercent: 30,
			
		// 	scrollTrigger: {
		// 		trigger: ".third-row",
		// 		start: "top bottom",
		// 		scrub: true
		// 	}
		// });

		// gsap.to(".s9", {
		// 	scale: 0.8,
			
		// 	scrollTrigger: {
		// 		trigger: ".footer",
		// 		start: "top bottom",
		// 		// end: "+=1%",
		// 		scrub: true
		// 	}
		// });




	}
})

