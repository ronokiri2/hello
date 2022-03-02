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

tl.to(".s2__svg-perehod", {scale: 130, duration: 1});


gsap.to(".s2", {
	backgroundColor: "black",
	scrollTrigger: {
	trigger: ".s1",
	  start: "top top",
	  end: "+=10%",
	  scrub: true
	}
  });
// background color animation
gsap.to(".s2", {
	backgroundColor: "white",
	scrollTrigger: {
	trigger: ".s2",
	  start: "top top",
	  end: "+=40%",
	  scrub: true
	}
  });