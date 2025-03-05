index = document
        .getElementById("number")
        .addEventListener("input", function () {
          index = this.value;
        });



        function printStars(index, border = 5) {
            
            if (index < 5) {
                return "Please enter a positive integer greater than or equal to 5.";
            }
        
            let middle;
            if (index % 2 === 0) {
                middle = Math.floor(index / 2);
            } else {
                middle = Math.floor((index - 1) / 2) + 1;
            }
        
            let result = "";
            for (let i = 1; i <= index; i++) {
                let str = "";
                for (let j = 1; j <= index; j++) {
                    if (
                        j === 1 || 
                        (i <= middle && j === index - (2 * i) + 2) || 
                        (i > middle && j === (2 * i) - index)
                    ) {
                        str += "* ".repeat(border);
                    } else {
                        str += "&nbsp;".repeat(border * 2);
                    }
                }
                result += str + "<br>"; 
                console.log(str)
            }
        
            return result;
        }


      document.getElementById("submit").addEventListener("click", function () {
        document.getElementById("result").innerHTML =  printStars(index);
      });

      document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("number").value = "";
        document.getElementById("result").innerHTML = "";
      });