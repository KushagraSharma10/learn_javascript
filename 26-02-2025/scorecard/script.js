let HindiField = document.querySelector("#Hindi")
let EnglishField = document.querySelector("#English")
let MathsField = document.querySelector("#maths")
let SocialField = document.querySelector("#Social")
let ComputerField = document.querySelector("#Comp")
let submitBtn = document.querySelector("#submitBtn")
let showTotalMarks = document.querySelector("#totalMarks")
let nameField = document.querySelector("#name")
let TableInputs = document.querySelectorAll("table input")

let totalMarks;
let nameInput;
let percentage;
let fixedPercent;

nameField.addEventListener("input", function(){
    nameInput = nameField.value
})

function getHindiMarks(){
    return parseInt(HindiField.value) || 0
} 

function getEnglishMarks(){
    return parseInt(EnglishField.value) || 0
}
function getMathsMarks(){
    return parseInt(MathsField.value) || 0
}
function getSocialMarks(){
    return parseInt(SocialField.value) || 0
}
function getCompMarks(){
    return parseInt(ComputerField.value) || 0
}


function calculateTotalMarks(){
    totalMarks = getHindiMarks() + getEnglishMarks() + getMathsMarks() + getSocialMarks() + getCompMarks()
    showTotalMarks.textContent = totalMarks
}

function calculatePercentage(){
    if(!nameInput || nameInput.trim() === ""){
        alert("Please enter your name")
        return;
    }
    percentage = (totalMarks / 500) * 100
    fixedPercent = percentage.toFixed(2);
    console.log(fixedPercent)

   

    if(fixedPercent>= 90){
        alert(`Hi ${nameInput} you came in merit`)
    } else if( fixedPercent >= 60 && fixedPercent <90){
        alert(`Hi ${nameInput} you passed with 1st division`)
    } else if(fixedPercent >=45 && fixedPercent < 60){
        alert(`Hi ${nameInput} you passed with 2nd division`)
    } else if(fixedPercent >=33 && fixedPercent < 45){
        alert(`Hi ${nameInput} you passed with 3rd division`)
    } else if(fixedPercent > 0 && fixedPercent < 33){
        alert(`Hi ${nameInput} you failed`)
    } else{
        alert(`Invalid Percentage`)
    }

}



HindiField.addEventListener("input", calculateTotalMarks)
EnglishField.addEventListener("input", calculateTotalMarks)
MathsField.addEventListener("input", calculateTotalMarks)
SocialField.addEventListener("input", calculateTotalMarks)
ComputerField.addEventListener("input", calculateTotalMarks)


TableInputs.forEach(input => {
    input.addEventListener("input", (event) => {
        let value = event.target.value;
        if (value < 0 || value > 100) {
            alert("Enter a number between 0 and 100");
            event.target.value = "";
        }
        calculateTotalMarks();
    });
})


submitBtn.addEventListener("click", calculatePercentage)