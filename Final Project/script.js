var nQanak = 80;
var mQanak = 80;
var side = 10;



function setup() {
	createCanvas(nQanak * side, mQanak * side);
	background('#acacac');
	frameRate(10);
	
}
io.on("",drawMatrix);
function drawMatrix() {
	for (var m = 0; m < mQanak; m++) {
		for (var n = 0; n < nQanak; n++) {
			if (matrix[m][n] == 1) {
				fill('green');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 0) {
				fill('#acacac');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 2) {
				fill('yellow');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 3) {
				fill('orange');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 4) {
				fill('red');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 5) {
				fill(0, 0, 200);
				rect(n * side, m * side, side, side);
			}
		}
	}


}