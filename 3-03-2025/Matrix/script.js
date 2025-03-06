index = document
  .getElementById("number")
  .addEventListener("input", function () {
    index = this.value;
  });

let boxTemp = ``;
let arr = []
let str;
function Boxes(index) {
  
  // arr = []; 
  let output = "";

  for (let i = 0; i < index; i++) {
    let row = [];

    let str = "";

    for (let j = 0; j < index; j++) {
      let id = `cell-${i}-${j}`;
      str += `<div class="boxes"><input style = "padding: 1vw; text-align:center"  id= ${id} type = "number"></div>`; 
      row.push(0); 
    }

    output += `<div style="display: flex;">${str}</div>`;
    arr.push(row); 
  }
  return output
}

function addEventListeners() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let cell = document.getElementById(`cell-${i}-${j}`);
      cell.addEventListener("input", function () {
        let value = parseInt(this.value) || null;

        arr[i][j] = null;
        if (value === 0) return;

        if (value != null && !isUnique(i, j, value)) {
          alert(`Value ${value} is already present in row ${i} or column ${j}!`);
          this.value = "";
          return;
        }

        arr[i][j] = value;
        console.log(arr);
      });

      cell.addEventListener("change", function () {
        if (!this.value) {
          arr[i][j] = null;
        }
      });
    }
  }
}

// Function to sum a row
function sumRow(rowIndex) {
  if (rowIndex >= 0 && rowIndex < arr.length) {
    let rowSum = 0;
    for (let i = 0; i < arr[rowIndex].length; i++) {
      rowSum += arr[rowIndex][i];
    }
    console.log(`Sum of Row ${rowIndex}: ${rowSum}`);
  } else {
    console.log("Invalid row index");
  }
}

function sumCol(colIndex){
  if(colIndex >= 0 && colIndex < arr.length) {
    let colSum = 0;
    for(let i = 0; i<arr[colIndex].length; i++){
      colSum += arr[i][colIndex];
    }
    console.log(`Sum of Column ${colIndex}: ${colSum}`);
  }else {
    console.log("Invalid column index");
  }
}


function isUnique(row, col, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[row][i] === value || arr[i][col] === value) {
      return false; 
    }
  }
  return true;
}

document.getElementById("submit").addEventListener("click", function () {
  document.getElementById("result").innerHTML = Boxes(index);
  addEventListeners();
  console.log(arr)
});


// document.getElementById("clear").addEventListener("click", function () {
//   document.getElementById("number").value = "";
//   document.getElementById("result").innerHTML = "";
//   arr = []; 
// });
