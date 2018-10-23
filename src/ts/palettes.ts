const palettes = [
	["#FBF9FA", "#Fd0054", "#A80038", "#2B2024"],
	["#F2F4B2", "#CCE490", "#0C907D", "#0D627A"],
	["#FFF0F8", "#FFC2E9", "#CCA2E1", "#543E5C"],
	["#F2F7FF", "#0B409C", "#10316B", "#FFE867"],
	["#1B3764", "#4AB8B8", "#FAFCCB", "#EFA35C"],
	["#08D9D6", "#252A34", "#FF2E63", "#EAEAEA"],
	["#F67280", "#c06c84", "#36C5B7", "#355C7D"],
	["#0C056D", "#590D82", "#B61AAE", "#F25D9C"],
	["#F4F7F7", "#AACFD0", "#5DA0A2", "#34495E"],
	["#3498DB", "#ECF0F1", "#34495E", "#F1C40F"],
]

function shuffle(arr: Array<any>) :Array<any>{
	arr.forEach((elm, i) => {
		let seed = Math.floor(Math.random() * arr.length);
		let tmp = elm;
		arr[i] = arr[seed];
		arr[seed] = tmp;
	})
	return arr;
}

export function getPalette() {
	//shuffle palettes
	let shuffled_palettes = shuffle(palettes);
	let shuffled_palette = shuffle(shuffled_palettes[Math.floor(Math.random() * shuffled_palettes.length)]);
	return shuffled_palette;
}