// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

var numchar = prompt ("Number of Characters from 8 to 128");
var num = confirm ("Do You Want Numbers?");
var upper = confirm ("Do you Want Upper Case Letters?")
var lower = confirm ("Do You Want Lower Case Letters?")
var specchar = confirm ("Do You Want Special Charaters?")

var array1 = []
var array2 = []

function generatePassword () {
if (num) {
    array1 = array1.concat(numbers);
}

if (upper) {
    array1 = array1.concat(uppercaseletters);

}

if (lower) {
    array1 = array1.concat(lowercaseletters);
}

if (specchar) {
    array1 = array1.concat(specialchar);
}

console.log (array1)


for (var i = 0; i < numchar; i++) {
    array2.push (array1[Math.floor(Math.random() * array1.length)]);
}

return array2.join("");
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