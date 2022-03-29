// анимация плавного скрытия прелоадера
'use strict';
document.addEventListener('DOMContentLoaded', function () {
	function timer() {
		document.body.classList.add('loaded_hiding');
		window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');
		}, 500);

	}
	setTimeout(timer, 2000);
});

// этот код на мобильных вызывал неприятный баг
// страница отображалась только через полторы минуты
// из-за медленной загрузки картинок
// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//     	document.body.classList.add('loaded');
//     	document.body.classList.remove('loaded_hiding');
//     }, 300);
// }