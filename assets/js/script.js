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

// Student Code
var generatePassword = function () {
  // Get the password length from the user, between 8-128 inclusive
  var passwordLength;
  do {
    passwordLength = prompt("password length (8-128");
    // By default prompt returns a string, this converts into a number
    passwordLength = parseInt(passwordLength);
  } while(passwordLength < 8 || passwordLength > 129);

  //Get password parameters
  var useLowercase = confirm("Should the password use lowercase characters?");
  var useUppercase = confirm("Should the password use Uppercase characters?");
  var useNumeric = confirm("Should the password use numbers?");
  var useSpecial = confirm("Should the password use special characters?");

}
