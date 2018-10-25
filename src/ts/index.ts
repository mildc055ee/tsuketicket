const canvas = <HTMLCanvasElement>document.getElementById('card');
const defaultSize = {
	width: 345,
	height: 209
};

function resizeCanvas(){
	if (window.matchMedia('(max-width: 410px)').matches) {
		const shrinkRate = window.parent.screen.width * 0.8 / defaultSize.width;
		canvas.width = defaultSize.width * shrinkRate;
		canvas.height = defaultSize.height * shrinkRate;
	}
	else {
		canvas.width = defaultSize.width;
		canvas.height = defaultSize.height;
	}
};

//initialize
resizeCanvas();

window.addEventListener('resize', canvas => {
	resizeCanvas();
});


