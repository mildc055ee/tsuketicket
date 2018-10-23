import { CanvasSpace, Pt, Group, Create } from 'pts';

const space = new CanvasSpace("#card")
	.setup({ bgcolor: "#ffffff" });

const form = space.getForm();
let noiseLine: Group;
let noiseGrid: Group;

space.add({
	start: bound => {
		const ln = Create.distributeLinear([
					new Pt(0, space.center.y),
					new Pt(space.width, space.center.y)
					], 50);
		const gd = Create.gridPts(space.innerBound, 20, 20);
		noiseLine = Create.noisePts(ln, 0.1, 0.1);
		noiseGrid = Create.noisePts(gd, 0.05, 0.1, 20, 20);
	},

	animate: (time, ftime) => {
		// Use pointer position to change speed
		let speed = space.pointer.$subtract(space.center).divide(space.center).abs();

		// Generate noise in a grid
		noiseGrid.map((p, i) => {
			p.step(0.01 * speed.x, 0.01 * (1 - speed.y));
			form.fillOnly(["#ab9", "#280", "#fca"][i % 3]).point(p, Math.abs(p.noise2D() * space.size.x / 20));
		});

		// Generate noise in a line
		let nps = noiseLine.map(p => {
			p.step(0.01 * (1 - speed.x), 0.05 * speed.y);
			return p.$add(0, p.noise2D() * space.center.y);
		});

	}
});

space.bindMouse().play();
