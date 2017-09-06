var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var modeButtons = document.querySelectorAll(".mode");

var scoreCorrect = document.querySelector("#scoreCorrect");
var scoreWrong = document.querySelector("#scoreWrong");
var correctCount = 0;
var wrongCount = 0;

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[0].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else if (this.textContent === "Normal"){
				numSquares = 6;
			} else {
				numSquares = 9;
			}
			reset();
		});
	}
}

function setupSquares() {
		for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				correctCount++;
				scoreCorrect.textContent = correctCount;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				wrongCount++;
				scoreWrong.textContent = wrongCount;
			}
			
		});
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
	}
}
function reset() {
	colors = getRgbArray(numSquares);
	pickedColor = randomPicked();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = ("#4682b4");
}

resetButton.addEventListener("click", function(){
	reset();
})

function getRandomRgb() {
	//randomised 3 variables r , g , b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //returns the 3 in a rgb (x, x, x) format
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function getRgbArray(num) {
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(getRandomRgb());
	}
	return arr;
}

function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;	
	}
}

function randomPicked() {
	var randomPicked = Math.floor(Math.random() * colors.length);
	return colors[randomPicked];
}