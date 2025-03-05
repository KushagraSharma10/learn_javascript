index = document
  .getElementById("number")
  .addEventListener("input", function () {
    index = this.value;
  });

let boxTemp = `<div class="boxes"><input id = "box" type = "Number"></div>`;

// boxTemp.style.display = "flex"
let arr = []
let str;
function Boxes(index) {
  let output = ""
  for (let i = 0; i < index; i++) {
    let str = "";
    for (let j = 0; j < index; j++) {
      str += boxTemp;
    }
    output += `<div style="display: flex;">${str}</div>`; 
    arr.push([output])
    
    
  }
 
  return output;
}
console.log(Boxes())

console.log(arr)
document.getElementById("submit").addEventListener("click", function () {
  document.getElementById("result").innerHTML = Boxes(index);
});


document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("number").value = "";
  document.getElementById("result").innerHTML = "";
});
