var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelBlue";
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
        squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelBlue";
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    messageDisplay.textContent = "";
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelBlue";
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }
});

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++)
{
    // add initial colors to squares
    squares[i].style.background = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function (){
        // grab color of clicked colors
        var clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if(clickedColor == pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all square to change each color to match color
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = pickedColor;
}

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        var randColor = "rgb(";
        for(var j = 0; j < 2; j++)
        {
            randColor += Math.floor(Math.random() * 256) + ", ";
        }
        randColor += Math.floor(Math.random() * 256) + ")";
        arr.push(randColor);
    }
    return arr;
}
