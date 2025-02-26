  let boxes = ["", "", "", "", "", "", "", "", ""];

  let inputs = []

  let index = 0;

  let box = document.getElementsByClassName("box");
  let buttonX = document.getElementById("X");
  let buttonO = document.getElementById("O");
  let inputField = document.getElementById("insertNum"); // Reference to the input field
  let errorMessage = document.getElementById("error-message");

  let currentPlayer = "X";

  index = inputField.addEventListener("input", function () {
    index = parseInt(this.value);
    if (index < 0 || index > 8) {
      inputField.style.border = '2px solid red'
      errorMessage.textContent = "Enter a number between 0-8";
      inputField.value = "";
    } else{
      errorMessage.textContent = "";
    }
  });

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
      if (index >= 0 && index < 9) {
        if (boxes[index] !== "") {
          inputField.value = "";
          return;
        }
        if(inputs.length >= 6){
          let removedInput = inputs.shift()
          let removedIndex = removedInput.index
          boxes[removedIndex] = ""
          let drawBox = box[removedIndex].querySelector(".draw");
          drawBox.textContent = "";
        }
        inputs.push({ player: "X", index: index });
        boxes[index] = "X";
        
        let drawBox = box[index].querySelector(".draw");
        drawBox.textContent = "X";
        console.log(inputs)
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
        if (boxes[index] !== "") {
          inputField.value = "";
          return;
        }
        if(inputs.length >= 6){
          
          let removedInput = inputs.shift()
          let removedIndex = removedInput.index;
          console.log(removedIndex)
          boxes[removedIndex] = ""
          let drawBox = box[removedIndex].querySelector(".draw");
          drawBox.textContent = "";
          
        }
        inputs.push({ player: "O", index: index });
        boxes[index] = "O";
        
        let drawBox = box[index].querySelector(".draw");
        drawBox.textContent = "O";
        console.log(inputs)

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
