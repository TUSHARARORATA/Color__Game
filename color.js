let numSquares = 6;
let colors = [];
let pickedColor;

let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");

let squares = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");

let resetButton = document.querySelector("#reset");

let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //to be run at start
  //add event listener to reset button
  resetButton.addEventListener("click", reset);
  //adding event listeners to the mode buttons
  addEventListenersToModeButtons();
  //add event listeners to squares
  addEventListenersToSquares();

  reset();
}

function addEventListenersToModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("btn-selected");
      modeButtons[1].classList.remove("btn-selected");

      this.classList.add("btn-selected");

      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);

      reset();
    });
  }
}

function addEventListenersToSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners
    squares[i].addEventListener("click", function () {
      //grab clicked color
      let clickedColor = this.style.backgroundColor;
      //compare it with oicked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!!";
        changeColors(clickedColor);
        resetButton.textContent = "Play Again..";
      } else {
        this.style.backgroundColor = "#ffffff";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color) {
  //loop through all the squares and apply color on them
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //change h1 background also
  h1.style.backgroundColor = color;
}
function pickColorFunc() {
  let random = Math.floor(Math.random() * colors.length);
  // console.log(random);
  return colors[random];
}

function generateRandomColors(num) {
  //create array
  let arr = [];
  //generate num random colors
  for (let i = 1; i <= num; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + String(r) + ", " + String(g) + ", " + String(b) + ")";
    arr.push(color);
  }
  //return array
  return arr;
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  // console.log(colors);
  //select new random color, update the pickedColor and its display
  pickedColor = pickColorFunc();
  // console.log(pickedColor);
  colorDisplay.textContent = pickedColor;
  //change color of squares and hide squares

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "inline-block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //change background of h1
  h1.style.backgroundColor = "lightgreen";
  //change text of button
  resetButton.textContent = "New Colors";
  //UNdisplaymssage
  messageDisplay.textContent = "";
}
