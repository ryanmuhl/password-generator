// Function Used to collect Data from input and confirm prompts
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


//Function to generate password
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

    if (userInput.upper) {
        arrayAll = arrayAll.concat(uppercaseletters.split(""));
   
    }

    if (userInput.lower) {
        arrayAll = arrayAll.concat(lowercaseletters.split(""));
    }

    if (userInput.spechar) {
        arrayAll = arrayAll.concat(specialchar.split(""));
    }

    if (userInput.numchar < 8 || userInput.numchar > 128){
        return ("Number of Characters must be between 8 and 128.  Input correct Number of Characters and select Generate Password Button.")
    }
    
    var arrayFinal  = []
    for (var i = 0; i < userInput.numchar; i++) {
        
        arrayFinal.push (arrayAll[Math.floor(Math.random() * arrayAll.length)]);
        
       
       console.log (arrayFinal)
       
    
}
return (arrayFinal.join (""))
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