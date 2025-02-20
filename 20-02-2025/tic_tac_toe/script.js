let boxes = ["", "", "", "", "", "", "", "", ""];

let index = 0;

let box = document.getElementsByClassName("box");
let buttonX = document.getElementById("X");
let buttonO = document.getElementById("O");
// let inputField = document.getElementById("insertNum"); // Reference to the input field
let inputBtn = document.querySelector("#inputBtn")


// index = inputField.addEventListener("input", function () {
//   index = parseInt(this.value);
// });

let UserInput;




function handleInput(){
  let inputResult = prompt("Enter the input")
  UserInput = parseInt(inputResult)

  
if(inputResult !== null){

  let selectBox = box[inputResult]
  selectBox.style.backgroundColor = "grey"
  console.log(selectBox)
  // console.log(inputResult)
} else{
  let confirmText = confirm("Are you sure you don't want to give Input")
  console.log(confirmText)

  if(confirmText === false){
    handleInput()
  } else{
    return
  }
  
}

}

inputBtn.addEventListener("click", handleInput)

let currentPlayer = "X";


function checkWinner(player) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombos.length; i++) {
    const combo = winCombos[i];
    if (
      boxes[combo[0]] === player &&
      boxes[combo[1]] === player &&
      boxes[combo[2]] === player
    ) {
      combo.forEach((i) => {
        document.getElementsByClassName("box")[i].style.backgroundColor =
          "#4CAF50";
      });
      return true;
    }
  }
  return false;
}

function clickX() {
  buttonX.addEventListener("click", function () {
    if (UserInput >= 0 && UserInput < 9) {
      if (boxes[UserInput] !== "") {
        alert("This box is already filled!");
        return;
      }
      boxes[UserInput] = "X";
      let drawBox = box[UserInput].querySelector(".draw");
      drawBox.textContent = "X";

      if (checkWinner("X")) {
        setTimeout(function () {
          alert("X Wins!");
          location.reload();
        }, 1000);
      } else {
        buttonO.disabled = false;
        buttonX.disabled = true;
      }
      index = null;
      inputField.value = "";
    }
  });
}

function clickO() {
  buttonO.addEventListener("click", function () {
    if (index >= 0 && index < 9) {
      if (boxes[UserInput] !== "") {
        alert("This box is already filled!");
        inputField.value = "";
        return;
      }
      boxes[UserInput] = "O";
      let drawBox = box[user].querySelector(".draw");
      drawBox.textContent = "O";
      if (checkWinner("O")) {
        setTimeout(function () {
          alert("O Wins!");
          location.reload();
        }, 1000);
      } else {
        buttonO.disabled = true;
        buttonX.disabled = false;
      }
      index = null;
      inputField.value = "";
    }
  });
}

buttonO.disabled = true;
buttonX.disabled = false;
clickX();
clickO();
