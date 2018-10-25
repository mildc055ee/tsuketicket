import { deviceType } from './device';

export function saveImage(canvasId: string, fileName: string, format: string) {
	const MIME_TYPE = 'image/png';
	const FILE_EXTENTION = format;
	const defaultSize = {
		width: 345,
		height: 209
	};

	// for IE, Edge
	if (navigator.msSaveOrOpenBlob) {
		const blob = <HTMLCanvasElement>document.getElementById(canvasId).msToBlob(MIME_TYPE, 1);
		window.navigator.msSaveBlob(blob, `${fileName}.${FILE_EXTENTION}`)
	}
	else {
		const canvas = <HTMLCanvasElement>document.getElementById(canvasId);
		let imgURL = canvas.toDataURL();

		//mobile or tablet?
		if (deviceType() !== 'pc'){
			const img = new Image();
			img.onload = () => {
				const imgCanvas = document.createElement('canvas');
				imgCanvas.width = defaultSize.width;
				imgCanvas.height = defaultSize.height;
				canvas.getContext('2d').drawImage(img, 0, 0, defaultSize.width, defaultSize.height);
				imgURL = canvas.toDataURL();
			}
		};

		const a = document.createElement('a');
		a.download = `${fileName}.${FILE_EXTENTION}`;
		a.href = imgURL;
		a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
}
