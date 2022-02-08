// анимация плавного скрытия прелоадера

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
    	document.body.classList.add('loaded');
    	document.body.classList.remove('loaded_hiding');
    }, 300);
}