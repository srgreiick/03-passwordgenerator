// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);


function createPassword() {
//Blank variable to store possible password characters
  var passwordChar = "";
//User defines password length with safty if they coose too short or to long  
  var passwordLength = prompt("Password Length? 8-128");
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must be greater than 8 and less than 128 charaters");
    return createPassword()
  }
//Adds upper case letters to possible password variable
  var passwordUpper = confirm("Do you want UpperCase letters?");
 if (passwordUpper)
  passwordChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(passwordChar);
//Adds lower case letters to possible password variable
  var passwordLower = confirm("Do you want LowerCase letters?");
  if (passwordLower)
   passwordChar += "abcdefghijklmnopqrstuvwxxyz";
   console.log(passwordChar);
//Adds symbols to possible password variables
  var passwordSymbols = confirm("Do you want symbols?");
  if (passwordSymbols) {
    passwordChar += "!\"§$%&/()=?\u{20ac}";
    console.log(passwordChar)
}
//Adds numbers to possible password variable
var passwordNumbers = confirm("Do you want numbers?");
if (passwordNumbers) {
  passwordChar += 1234567890;
  console.log(passwordChar)
}
//
if (passwordChar === ""){
  alert("You need to pick something. Try again.");
  return createPassword()
}
}







//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page