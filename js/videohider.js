function detectmob() { 

    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){

        // If mobile, then we do all this
		// alert("Mobile browser detected")
    }
    else {
		// alert("Mobile browser undetected")
        // If not mobile then do this
		document.querySelector(".s1__video").innerHTML = '<source src="media/videoplayback.mp4" type="video/mp4">';
    }
} 
 detectmob()