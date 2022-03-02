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
			//   end: vh(200) + ' top',
			  end: "+=200%",
			  scrub: true,
			  pin: true
			}
		  });
		
		// Увеличение svg в 130 раз по кастомному изингу
		tl.to(".s2__svg-perehod", {
			scale: 130, 
			duration: 1, 
			ease: CustomEase.create("custom", "M0,0,C0.486,0.054,0.234,0.2,0.49,0.488,0.686,0.709,0.78,1,1,1"),
		});
		
		
		// Меняет цвет бэкраунда s2 на черный
		// черный в css не установлен на случай если не загрузится js или сломается
		gsap.to(".s2", {
			backgroundColor: "black",
			scrollTrigger: {
			trigger: ".s1",
			  start: "top top",
			  end: "+=1%",
			  scrub: true
			}
		  });
		
		
		
		// background color animation
		gsap.to(".s2", {
			backgroundColor: "white",
			scrollTrigger: {
			trigger: ".s2",
			  start: "top top-=600px",
			  end: "+=40%",
			  scrub: true
			}
		  });
	}
})

