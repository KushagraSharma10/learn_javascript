index = document
        .getElementById("number")
        .addEventListener("input", function () {
          index = this.value;
        });

function printStars(index) {
        if(index <= 0){
            return "Please enter a positive integer greater than 0."
        }
        let result = ""
        for (let i = 1; i <= index; i++) {
          let str = "";
          for (let j = 1; j <= i; j++) {
            str += "* ";
          }
          console.log(str);
          result += str + "<br>";
        }
        return result
    }

      document.getElementById("submit").addEventListener("click", function () {
        document.getElementById("result").innerHTML =  printStars(index);
      });

      document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("number").value = "";
        document.getElementById("result").innerHTML = "";
      });