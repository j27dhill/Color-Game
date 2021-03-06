var h1Color = "steelblue";
var numSquares = 6;
var colors = [];
var pickedColor;

//selectors
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init(){
	
	setupModeButtons();
	
	setupSquares();
	 
	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for (var i = 0;i < modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			
			// if (this.textContent === "Easy"){
			// 	numSquares = 3;
			// }
			// else{
			// 	numSquares = 6;
			// }
			reset();

		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i]; 
	 	//add click listeners to squares

	 	squares[i].addEventListener("click", function(){
	 		var clickedColor = this.style.backgroundColor;

	 		if (clickedColor === pickedColor){
	 			messageDisplay.textContent = "Correct!";
	 			resetButton.textContent = "Play Again?";
	 			h1.style.backgroundColor = clickedColor;
	 			changeColors(clickedColor); //change other squares to correct square color
	 		}
	 		else{
	 			this.style.backgroundColor = "#232323";
	 			messageDisplay.textContent = "Try Again"
	 		}
	 	});
	}
}

function reset(){
	//generate new colors
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisply to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	for (var i =0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = h1Color;	
}

resetButton.addEventListener("click",function(){
	reset();
})


function changeColors(color){
	//loop through all squares, change colors to correct color
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	var ran = "rgb(" + r + ", " + g + ", " + b + ")";
	return ran;
}