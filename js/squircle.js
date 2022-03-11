// Houdini squircle 
// Скругления суперэллипсов
// Не работает для тега <a>

if ("paintWorklet" in CSS) {
	CSS.paintWorklet.addModule(
		'js/houdini-squircle.min.js'
	);

	const s1__wrapper = document.querySelector(".s1__wrapper");
	const video = document.querySelector(".s1__video");
	const posters = document.querySelectorAll(".s2__posters--poster");

	let vw = window.innerWidth / 100;
	console.log(`Start vw: ${vw}px`);


	// при запуске сайта, один раз запустится проверка на разрешение экрана:
	if (window.matchMedia("(min-width: 700px)").matches) {
		// для больших дисплеев:
		console.log(`Big display`);

		let vw = window.innerWidth / 100;
		let videoRaius = 3.25520833 * vw;

		// s1
		s1__wrapper.style.setProperty('--squircle-radius', `${videoRaius}`);
		video.style.setProperty('--squircle-radius', `${videoRaius}`);
		
		// s2 posters
		for (const poster of posters) {
			poster.style.setProperty('--squircle-radius', `${vw}`);
		}

		
	} else {
		// для смартфонов:
		console.log(`Small display`);

		let videoRaiusMobile = 12.5 * vw;
		let posterRadiusMobile = 4.09375 * vw;

		video.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
		s1__wrapper.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
	
		for (const poster of posters) {
			poster.style.setProperty('--squircle-radius', `${posterRadiusMobile}`);
		}
	}



	// замена радиуса при смена размера окна
	window.addEventListener('resize', function(event) {

		let vw = window.innerWidth / 100;
		console.log(`resized vw: ${vw}px`);


		// для больших дисплеев
		if (window.innerWidth >= 700) {
			
			let vw = window.innerWidth / 100;
			let videoRaius = 3.25520833 * vw;

			// s1
			s1__wrapper.style.setProperty('--squircle-radius', `${videoRaius}`);
			video.style.setProperty('--squircle-radius', `${videoRaius}`);
			
			// s2 posters
			for (const poster of posters) {
				poster.style.setProperty('--squircle-radius', `${vw}`);
			}

		} else {
		// для смартфонов

			let videoRaiusMobile = 12.5 * vw;
			let posterRadiusMobile = 4.09375 * vw;

			video.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
			s1__wrapper.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
		
			for (const poster of posters) {
				poster.style.setProperty('--squircle-radius', `${posterRadiusMobile}`);
			}
		}
		


	}, true);


}



