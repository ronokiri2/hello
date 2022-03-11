// Houdini squircle 
// Скругления суперэллипсов
// Не работает для тега <a>

if ("paintWorklet" in CSS) {
	CSS.paintWorklet.addModule(
		'js/houdini-squircle.min.js'
	);

	const posters = document.querySelectorAll(".s2__posters--poster");

	let vw = window.innerWidth / 100;
	console.log(`Start vw: ${vw}px`);

	for (const poster of posters) {
		poster.style.setProperty('--squircle-radius', `${vw}`);
	}

	// замена радиуса при смена размера окна
	window.addEventListener('resize', function(event) {
		let vw = window.innerWidth / 100;
		console.log(`vw: ${vw}px`);

		for (const poster of posters) {
			poster.style.setProperty('--squircle-radius', `${vw}`);
		}
	}, true);


}



