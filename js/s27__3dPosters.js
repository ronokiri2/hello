import Parallax from 'parallax-js'


// Elements
var scene1 = document.getElementById('scene1'); 
var scene2 = document.getElementById('scene2');
var scene3 = document.getElementById('scene3');  
var scene4 = document.getElementById('scene4');
var scene5 = document.getElementById('scene5');  
var scene6 = document.getElementById('scene6');
var scene7 = document.getElementById('scene7');  
var scene8 = document.getElementById('scene8');
var scene9 = document.getElementById('scene9'); 
var scene10 = document.getElementById('scene10'); 



var parallax = new Parallax(scene1, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene2, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene3, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene4, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene5, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene6, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene7, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene8, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene9, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});
var parallax = new Parallax(scene10, {
	hoverOnly: true,
	frictionX: 0.3,
	frictionY: 0.3,
});

if (window.matchMedia("(min-width: 700px)").matches) {  
	pivot.init({
		selector: '#scene1',
		scale: true,
		//   shine: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene2',
		scale: true,
		// shine: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene3',
		scale: true,
		// shine: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene4',
		scale: true,
		// shine: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene5',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene6',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene7',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene8',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene9',
		scale: true,
		perspective: 1500,
	})
	pivot.init({
		selector: '#scene10',
		scale: true,
		perspective: 1500,
	})
	//   pivot.init({
	// 	  selector: '#scene7',
	// 	  scale: true,
	// 	  shine: true,
	//   })
	//   pivot.init({
	// 	  selector: '#scene8',
	// 	  scale: true,
	// 	  shine: true,
	//   })
	//   pivot.init({
	// 	  selector: '#scene9',
	// 	  scale: true,
	// 	  shine: true,
	//   })
} 
