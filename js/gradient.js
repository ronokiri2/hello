import Granim from 'granim';

var granimInstance = new Granim({
    element: '.canvas',
    direction: 'custom',
	customDirection: {
		x0: '0%',
		y0: '100%',
		x1: '100%',
		y1: '0%'
	},
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
				[
					{ color: '#3A3D91', pos: 0 },
					{ color: '#C42E72', pos: .5 }
				],
				[
					{ color: '#2575fc', pos: 0 },
					{ color: '#912CFF', pos: .5 }
				],
				[
					{ color: '#524EFF', pos: 0 },
					{ color: '#FF3995', pos: .5 }
				]
            ]
        }
    }
});