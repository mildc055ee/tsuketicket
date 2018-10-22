document.getElementById('create').onclick = () => {
	saveImage('card', 'tsuke', 'png');
}

function saveImage(canvasId: string, fileName: string, format: string) {
	const MIME_TYPE = 'image/png';
	const FILE_EXTENTION = format;

	// for IE, Edge
	if (navigator.msSaveOrOpenBlob) {
		const blob = <HTMLCanvasElement>document.getElementById(canvasId).msToBlob(MIME_TYPE, 1);
		window.navigator.msSaveBlob(blob, `${fileName}.${FILE_EXTENTION}`)
	}
	else {
		const canvas = <HTMLCanvasElement>document.getElementById(canvasId);
		const imgURL = canvas.toDataURL(MIME_TYPE, 1);
		const a = document.createElement('a');
		a.download = `${fileName}.${FILE_EXTENTION}`;
		a.href = imgURL;
		a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(':');
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
}
