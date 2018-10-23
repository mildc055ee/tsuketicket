const palettes = [
	["#FBF9FA", "#Fd0054", "#A80038", "#2B2024"],
	["#F2F4B2", "#CCE490", "#0C907D", "#0D627A"],
	["#FFF0F8", "#FFC2E9", "#CCA2E1", "#543E5C"],
	["#F2F7FF", "#0B409C", "#10316B", "#FFE867"],
	["#1B3764", "#4AB8B8", "#FAFCCB", "#EFA35C"]
]

export function getPalette() {
	return palettes[Math.floor(Math.random() * palettes[0].length)];
}