import { CanvasSpace, Pt, Group, Create, Noise } from 'pts';
import { getPalette }from './palettes';
const space = new CanvasSpace("#card")
	.setup({ bgcolor: "#ffffff" });

const form = space.getForm();
const palette = getPalette();
let noiseGrid: Noise[];

space.add({
	start: bound => {
		const ln = Create.distributeLinear([
					new Pt(0, space.center.y),
					new Pt(space.width, space.center.y)
					], 50);
		const gd = Create.gridPts(space.innerBound, 15, 10);
		noiseGrid = <Noise[]> Create.noisePts(gd, 0.1, 0.1, 10, 10);
	},

	animate: (time, ftime) => {
		let speed = space.pointer.$subtract(space.center).divide(space.center).abs();
		// Generate noise in a grid
		noiseGrid.map((p, i) => {
			p.step(0.01 * speed.x, 0.01 * (1 - speed.y));
			form.fillOnly(palette[i%4]).point(p, Math.abs(p.noise2D() * space.size.x / 25));
		});
	}
});

space.bindMouse().play();
