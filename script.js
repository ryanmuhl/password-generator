// Assignment code here
function getUserOptions() {
    var numchar = parseInt (prompt("Number of Characters from 8 to 128"));
    var num = confirm("Do You Want Numbers?");
    var upper = confirm("Do you Want Upper Case Letters?")
    var lower = confirm("Do You Want Lower Case Letters?")
    var specchar = confirm("Do You Want Special Charaters?")
    

    var answers = {
        numchar: numchar,
        num: num,
        upper: upper,
        lower: lower,
        spechar: specchar,
    }

    return answers;
}



function generatePassword() {
    var userInput = getUserOptions();
    var numbers = "0123456789";
    var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
    var specialchar = "!#$%&'()*+-./:;<=>?@[]^_`{|\}~"
    var arrayAll =[];

    if (userInput.num) {
        arrayAll = arrayAll.concat(numbers.split(""));
    }

    if (userInput.num) {
        arrayAll = arrayAll.concat(uppercaseletters.split(""));
    }

    if (userInput.num) {
        arrayAll = arrayAll.concat(lowercaseletters.split(""));
    }

    if (userInput.num) {
        arrayAll = arrayAll.concat(specchar.split(""));
    }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);