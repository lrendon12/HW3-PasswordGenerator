var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "$", "#", "$", "%", "&", "*", "/", "+"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  var length = parseInt(prompt("How many characters would you like your password to be?"));
  if (length < 8 || length > 128) {
    alert("Your characters must be between 8-128 characters");
    return;
  }
  var askLower = confirm("Do you want lower case letters?");
  var askUpper = confirm("Do you want upper case letters?");
  var askSymbols = confirm("Do you want symbols ?");
  var askNumbers = confirm("Do you want numbers?");

  if (askLower === false && askUpper === false && askSymbols === false && askNumbers === false) {
    alert("We at least one type of character to create a password with");
    return;
  }
  var password = [];
  var optionsPass = [];
  if (askLower === true) {
    optionsPass = optionsPass.concat(lowerCase);
  }
  if (askUpper === true) {
    optionsPass = optionsPass.concat(upperCase);
  }
  if (askSymbols === true) {
    optionsPass = optionsPass.concat(symbols);
  }
  if (numbers === true) {
    optionsPass = optionsPass.concat(numbers);
  }
  for (var i = 0; i < length; i++) {
    password.push(optionsPass[Math.floor(Math.random() * optionsPass.length)]);
  }
  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);