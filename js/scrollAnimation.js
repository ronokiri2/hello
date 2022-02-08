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
	  trigger: ".s2__svg",
	  start: "center center",
	//   end: vh(200) + ' top',
	  end: "+=100%",
	  scrub: true,
	  pin: true
	}
  });

tl.to(".s2__svg", {scale: 80, duration: 1})



// background color animation
gsap.to(".s3", {
	backgroundColor: "white",
	scrollTrigger: {
	trigger: ".s3",
	  start: "top top",
	  end: "+=10%",
	  scrub: true
	}
  });