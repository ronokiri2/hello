'use strict';
// анимация зума при клике на alt / option

const zoomAnimation = () => {

	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	if (isSafari === false && isFirefox === false) {
		const zoom = document.querySelector('focus-zoom');

		const toggleSpotlight = (bool) =>
		zoom.style.setProperty('--focal-size',
		bool ?
		'15vmax' :
		'100%');
		
		window.addEventListener('pointermove', e => {
			zoom.style.setProperty('--mouse-x', e.clientX + 'px');
			zoom.style.setProperty('--mouse-y', e.clientY + 'px');
		});
		
		window.addEventListener('keydown', (e) =>
		toggleSpotlight(e.altKey));
		window.addEventListener('keyup', (e) =>
		toggleSpotlight(e.altKey));
	}

};
zoomAnimation();
