import { saveImage } from './download';
document.getElementById('create').onclick = () => {
	saveImage('card', 'tsuke', 'png');
}

document.getElementById('reload').onclick = () => {
	window.location.reload();
}