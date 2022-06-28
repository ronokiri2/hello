// Houdini squircle 
// Скругления суперэллипсов
// Не работает для тега <a>

'use strict';
if ("paintWorklet" in CSS) {
	CSS.paintWorklet.addModule(
		'js/houdini-squircle.min.js'
	);

	const s1__wrapper = document.querySelector(".s1__wrapper");
	const video = document.querySelector(".s1__video");
	// const posters = document.querySelectorAll(".s2__posters--poster");

	const s3_images = document.querySelectorAll(".s3__images--image");

	let vw = window.innerWidth / 100;
	// console.log(`Start vw: ${vw}px`);


	// при запуске сайта, один раз запустится проверка на разрешение экрана:
	if (window.matchMedia("(min-width: 700px)").matches) {

		// для больших дисплеев:
		// console.log(`Big display`);

		vw = window.innerWidth / 100;
		let videoRaius = 3.25520833 * vw;
		let s3_imageRadius = 0.651041667 * vw;

		// s1
		s1__wrapper.style.setProperty('--squircle-radius', `${videoRaius}`);
		video.style.setProperty('--squircle-radius', `${videoRaius}`);
		
		// s2 posters
		// for (const poster of posters) {
		// 	poster.style.setProperty('--squircle-radius', `${vw}`);
		// }

		// s3 images
		for (const s3_image of s3_images) {
			s3_image.style.setProperty('--squircle-radius', `${s3_imageRadius}`);
		}

		
	} else {

		// для смартфонов:
		// console.log(`Small display`);

		let videoRaiusMobile = 12.5 * vw;
		let posterRadiusMobile = 4.09375 * vw;
		let s3_imageRadiusMobile = 1.25 * vw;

		// s1
		s1__wrapper.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
		video.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
	
		// s2 posters
		// for (const poster of posters) {
		// 	poster.style.setProperty('--squircle-radius', `${posterRadiusMobile}`);
		// }

		// s3 images
		for (const s3_image of s3_images) {
			s3_image.style.setProperty('--squircle-radius', `${s3_imageRadiusMobile}`);
		}
	}



	// замена радиуса при смена размера окна
	window.addEventListener('resize', function(event) {

		let vw = window.innerWidth / 100;
		// console.log(`resized vw: ${vw}px`);


		// для больших дисплеев
		if (window.innerWidth >= 700) {
			
			let vw = window.innerWidth / 100;
			let videoRaius = 3.25520833 * vw;
			let s3_imageRadius = 0.651041667 * vw;

			// s1
			s1__wrapper.style.setProperty('--squircle-radius', `${videoRaius}`);
			video.style.setProperty('--squircle-radius', `${videoRaius}`);
			
			// s2 posters
			// for (const poster of posters) {
			// 	poster.style.setProperty('--squircle-radius', `${vw}`);
			// }

			// s3 images
			for (const s3_image of s3_images) {
				s3_image.style.setProperty('--squircle-radius', `${s3_imageRadius}`);
			}

		} else {
		// для смартфонов

			let videoRaiusMobile = 12.5 * vw;
			let posterRadiusMobile = 4.09375 * vw;
			let s3_imageRadiusMobile = 1.25 * vw;

			// s1 mobile
			video.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
			s1__wrapper.style.setProperty('--squircle-radius', `${videoRaiusMobile}`);
		
			// s2 posters mobile
			// for (const poster of posters) {
			// 	poster.style.setProperty('--squircle-radius', `${posterRadiusMobile}`);
			// }

			// s3 images mobile
			for (const s3_image of s3_images) {
				s3_image.style.setProperty('--squircle-radius', `${s3_imageRadiusMobile}`);
			}
		}
		


	}, true);


}



