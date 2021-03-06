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
  var askAgain;
  do {
    // Ask again by default
    askAgain=true;
    
    passwordLength = prompt("password length (8-128)");
    // By default prompt returns a string, this converts into a number
    passwordLength = parseInt(passwordLength);

    // Check password length fits criteria and was accepted correctly
    if(!passwordLength) alert("length not recognized, please provide a number 8-128. ex: 69");
    else if(passwordLength < 8) alert("Password too short!");
    else if(passwordLength > 128) alert("Password too long!");

    // If password length fits the criteria, do not ask for the length again.
    else askAgain = false;

  } while(askAgain);

  //Get password parameters
  do {
    // Ask agian by default.
    askAgain=true;

    var useLowercase = confirm("Should the password use lowercase characters?");
    var useUppercase = confirm("Should the password use Uppercase characters?");
    var useNumeric = confirm("Should the password use numbers?");
    var useSpecial = confirm("Should the password use special characters?");

    // Build usable characters string based on password parameters
    var usableCharacters = "";
    if(useLowercase) usableCharacters += "abcdefghijklmnopqrstuvwxyz";
    if(useUppercase) usableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(useNumeric) usableCharacters += "1234567890";
    if(useSpecial) usableCharacters += "`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?";

    // Check the user chose at least one acceptible type, and if they did don't ask again.
    if(!usableCharacters) alert("Please choose at least one acceptable character set.");
    else askAgain=false;

  } while(askAgain);

  var getRandomUsableCharacter = function() {
    var randomIndex = Math.floor(Math.random() * usableCharacters.length)
    return usableCharacters[randomIndex];
  }

  // console.log(getRandomUsableCharacter());

  // Add a random charater for each character in the length of the password 
  var password = "";
  for(i=0; i<passwordLength; i++) {
    password += getRandomUsableCharacter();
  }

  // return the result.
  return password;
}
