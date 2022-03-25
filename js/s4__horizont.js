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

sections.forEach((sct, i) => {
	ScrollTrigger.create({
		trigger: sct,
		start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
		end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		toggleClass: {targets: sct, className: "active"}
	});
});




// const pageWrap = document.querySelector('#PageWrap')

// //GSAPHorizontalScroll
// function GSAPHorizontalScroll() {
//     let Sections = gsap.utils.toArray("section");

//     let GSAPHorizontalScrollTL = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#PageWrap",
//             pin: true,
//             scrub: 0,
//             // snap: 1 / (Sections.length - 1),
//             end: () => "+=" + pageWrap.offsetWidth,
//             // markers: "true",
//         }
//     })
//     GSAPHorizontalScrollTL
//         .to(Sections, {
//             xPercent: -100 * (Sections.length - 1),
//             ease: "none",
//         })
// }
// //GSAPHorizontalScroll

// const sectionB = document.querySelector('#SectionB')

// //SectionB
// function SectionBGSAP() {
//     let SectionBGSAPTL = gsap.timeline({
//         scrollTrigger: {
          
//             trigger: sectionB,
//             scrub: 2,
          
//             start: () => 'top top-=' + (sectionB.offsetLeft - window.innerWidth) * (pageWrap.offsetWidth / (pageWrap.offsetWidth - window.innerWidth)),
//             end: () => '+=' + (sectionB.offsetWidth + window.innerWidth) * (pageWrap.offsetWidth / (pageWrap.offsetWidth - window.innerWidth)),
          
//             //start: "0% 100%",
//             //end: "100% 0%",
          
//             // scroller:"#SectionB",
          
//             //horizontal: true,   
          
//             markers: "true",
//         }
//     })
//     SectionBGSAPTL
//         .from("#SectionB h1", {
//             y: "-360", ease: "none",
//         })
//         .from("#SectionB h1", {
//             scale: 10, ease: "none",
//         })
//         .from("#SectionB h1", {
//             rotate: 360, ease: "none",
//         })
// }
// //SectionB

// window.onload = () => {
//     GSAPHorizontalScroll()
//     SectionBGSAP()
// }