// Start Generate Password function and declare variables
function generatePassword() {
var answers = {}
var numbers = "0123456789";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var specialchar = "!#$%&'()*+-./:;<=>?@[]^_`{|\}~";
var arrayAll =[];


//Function to stop promts if cancel is selected for Number of characters
function getUserOptions() {
    var numchar = parseInt (prompt("Number of Characters from 8 to 128"));
    
    if (numchar) {
        answers.numchar = numchar;
        followup();
    }

    else {
        alert ("Goodbye!!!!!");
    }
}



function followup() {
    answersNum = confirm("Do You Want Numbers?");
    answersUpper = confirm("Do you Want Upper Case Letters?");
    answersLower = confirm("Do You Want Lower Case Letters?");
    answersSpecchar = confirm("Do You Want Special Charaters?");
}

getUserOptions();


// If statements for selecting character type and concating into array   
    if (answersNum) {
        arrayAll = arrayAll.concat(numbers.split(""));
    }

    if (answersUpper) {
        arrayAll = arrayAll.concat(uppercaseletters.split(""));
   
    }

    if (answersLower) {
        arrayAll = arrayAll.concat(lowercaseletters.split(""));
    }

    if (answersSpecchar) {
        arrayAll = arrayAll.concat(specialchar.split(""));
    }

    if (answers.numchar < 8 || answers.numchar > 128){
        alert ("Number of Characters must be between 8 and 128.");
        return ("Select Generate Password Button and Try Again")
        
    }

    // For loop to randomize array
    var arrayFinal  = []
    for (var i = 0; i < answers.numchar; i++) {
        
        arrayFinal.push (arrayAll[Math.floor(Math.random() * arrayAll.length)]);
       
       console.log (arrayFinal);
}

return (arrayFinal.join (""));
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