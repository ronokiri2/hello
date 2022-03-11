// // Houdini squircle 
// // Скругления суперэллипсов
// // Не работает для тега <a>

// if ("paintWorklet" in CSS) {
// 	CSS.paintWorklet.addModule(
// 		"https://www.unpkg.com/css-houdini-squircle@0.2.1/squircle.min.js"
// 	);

// 	const button = document.querySelector(".s1__button2");

// 	let vw = window.innerWidth / 100;
// 	let buttonRadius = 0.325520833 * vw;
// 	console.log(` early vw: ${vw}px`);
// 	button.style.setProperty('--squircle-radius', `${buttonRadius}`);



// 	window.addEventListener('resize', function(event) {
// 		let vw = window.innerWidth / 100;
// 		let buttonRadius = 0.325520833 * vw;
// 		console.log(`vw: ${vw}px`);
// 		// button.style = `--squircle-radius: calc(0.325520833 * ${vw})px;`
// 		button.style.setProperty('--squircle-radius', `${buttonRadius}`);
// 	}, true);


// }



