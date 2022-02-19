// Function Used to collect Data from input and confirm prompts
var answers = {}
var numbers = "0123456789";
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
var specialchar = "!#$%&'()*+-./:;<=>?@[]^_`{|\}~";
var arrayAll =[];

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
    answers.num = confirm("Do You Want Numbers?");
    answers.upper = confirm("Do you Want Upper Case Letters?");
    answers.lower = confirm("Do You Want Lower Case Letters?");
    answers.specchar = confirm("Do You Want Special Charaters?");
}

//Function to generate password
    function generatePassword() {
    getUserOptions();
   
    if (answers.num) {
        arrayAll = arrayAll.concat(numbers.split(""));
    }

    if (answers.upper) {
        arrayAll = arrayAll.concat(uppercaseletters.split(""));
   
    }

    if (answers.lower) {
        arrayAll = arrayAll.concat(lowercaseletters.split(""));
    }

    if (answers.specchar) {
        arrayAll = arrayAll.concat(specialchar.split(""));
    }

    if (answers.numchar < 8 || answers.numchar > 128){
        alert ("Number of Characters must be between 8 and 128.  Input correct Number of Characters and try again.");
        getUserOptions ();
        
    }
    
    
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