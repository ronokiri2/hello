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
  
  
	// Pretty simple huh?
  var parallax = new Parallax(scene1, {
	//   relativeInput: true,
	//   clipRelativeInput: true,
	  hoverOnly: true,
	  scalarX: 5,
	  scalarY: 5,
  });
  var parallax = new Parallax(scene2, {
	  relativeInput: true,
	  clipRelativeInput: true,
	  hoverOnly: true,
	  scalarX: 5,
	  scalarY: 5
  });
  var parallax = new Parallax(scene3, {
	  relativeInput: true,
	  clipRelativeInput: true,
	  hoverOnly: true,
	  scalarX: 5,
	  scalarY: 5
  });
  var parallax = new Parallax(scene4, {
	  relativeInput: true,
	  clipRelativeInput: true,
	  hoverOnly: true,
	  scalarX: 5,
	  scalarY: 5
  });
//   var parallax = new Parallax(scene5, {
// 	  relativeInput: true,
// 	  clipRelativeInput: true,
// 	  hoverOnly: true,
// 	  scalarX: 5,
// 	  scalarY: 5
//   });
//   var parallax = new Parallax(scene6, {
// 	  relativeInput: true,
// 	  clipRelativeInput: true,
// 	  hoverOnly: true,
// 	  scalarX: 5,
// 	  scalarY: 5
//   });
//   var parallax = new Parallax(scene7, {
// 	  relativeInput: true,
// 	  clipRelativeInput: true,
// 	  hoverOnly: true,
// 	  scalarX: 5,
// 	  scalarY: 5
//   });
//   var parallax = new Parallax(scene8, {
// 	  relativeInput: true,
// 	  clipRelativeInput: true,
// 	  hoverOnly: true,
// 	  scalarX: 5,
// 	  scalarY: 5
//   });
//   var parallax = new Parallax(scene9, {
// 	  relativeInput: true,
// 	  clipRelativeInput: true,
// 	  hoverOnly: true,
// 	  scalarX: 5,
// 	  scalarY: 5
//   });
  
  pivot.init({
	  selector: '#scene1',
	  scale: true,
	  shine: true,
	  perspective: 1500,
  })
  pivot.init({
	  selector: '#scene2',
	  scale: true,
	  shine: true,
	  perspective: 1500,
  })
  pivot.init({
	  selector: '#scene3',
	  scale: true,
	  shine: true,
	  perspective: 1500,
  })
  pivot.init({
	  selector: '#scene4',
	  scale: true,
	  shine: true,
	  perspective: 1500,
  })
//   pivot.init({
// 	  selector: '#scene5',
// 	  scale: true,
// 	  shine: true,
//   })
//   pivot.init({
// 	  selector: '#scene6',
// 	  scale: true,
// 	  shine: true,
//   })
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