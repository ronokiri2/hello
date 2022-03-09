
		gsap.registerPlugin(Draggable, InertiaPlugin);
		
		var slideDelay = 3.5;
		var slideDuration = 0.5;
		
		var slides = document.querySelectorAll(".slide");
		var prevButton = document.querySelector("#prevButton");
		var nextButton = document.querySelector("#nextButton");
		
		var numSlides = slides.length;
		
		for (var i = 0; i < numSlides; i++) {
			gsap.set(slides[i], {
				xPercent: i * 100
			});
		}
		
		var timer = gsap.delayedCall(slideDelay, autoPlay);
		
		var animation = gsap.to(slides, {
			duration: 1, 
			xPercent: "+=" + (numSlides * 100),
			ease: "none",
			paused: true,
			repeat: -1,
			modifiers: {
				xPercent: gsap.utils.wrap(-100, (numSlides - 1) * 100)
			}
		});
		
		var proxy = document.createElement("div");
		gsap.set(proxy, { x: 0 });
		var slideAnimation = gsap.to({}, {duration: 0.1});
		var slideWidth = 0;
		var wrapWidth = 0;
		resize();
		
		var draggable = new Draggable(proxy, {
			trigger: ".slides-container",
			throwProps: true,
			onPress: updateDraggable,
			onDrag: updateProgress,
			onThrowUpdate: updateProgress,
			snap: {     
				x: gsap.utils.snap(slideWidth)
			}
		});
		
		window.addEventListener("resize", resize);
		
		prevButton.addEventListener("click", function() {
			animateSlides(1);
		});
		
		nextButton.addEventListener("click", function() {
			animateSlides(-1);
		});
		
		function updateDraggable() {
			timer.restart(true);
			slideAnimation.kill();
			this.update();
		}
		
		
		function animateSlides(direction) {
			timer.restart(true);
			slideAnimation.kill();
			
			var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
			
			slideAnimation = gsap.to(proxy, {
				duration: slideDuration,
				ease: "sine",
				x: x,
				onUpdate: updateProgress
			});  
		}
		
		function autoPlay() {  
			if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
			timer.restart(true);
			} else {
				animateSlides(-1);
			}
		}
		
		function updateProgress() {  
			animation.progress(gsap.utils.wrap(0, 1, gsap.getProperty(proxy, "x") / wrapWidth));
		}
		
		function resize() {
			var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;
			
			slideWidth = slides[0].offsetWidth;
			wrapWidth = slideWidth * numSlides;
			
			gsap.set(proxy, {
				x: norm * wrapWidth
			});
			
			animateSlides(0);
			slideAnimation.progress(1);
		}
		
		function snapX(x) {
			return Math.round(x / slideWidth) * slideWidth;
		}