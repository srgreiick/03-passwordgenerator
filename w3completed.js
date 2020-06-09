 
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
//this function generates a random password based on user's selected criteria
function generatePassword() {
  //user defines password length
  var passwordLength = prompt("Please choose a length in between 8-128 characters");
  var possibleAnswers = "";
  if (passwordLength > 128 || passwordLength < 8) {
      alert("The password length needs to be at least 8 characters long and shorter than 128 characters")
      passwordLength = prompt("Please choose a length in between 8-128 characters");
  }
  //user decides whether to include lowercase characters
  var lowercase = confirm("Would you like to include lowercase characters in your password?");
  if (lowercase) {
    possibleAnswers += "abcdefghijklmnopqrstuvwxxyz";
  } 
  //user decides whether to include uppercase characters
  var uppercase = confirm("Would you like to include uppercase characters in your password?");
  if (uppercase) {
    possibleAnswers += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //user decides whether to include numbers in password
  var numbers = confirm("Would you like to include numbers in your password?");
  if (numbers) {
    possibleAnswers += 1234567890;
  }
  //user decides whether to include special characters in password
  var specialCharacters = confirm("Would you like to include special characters in your password?");
  if (specialCharacters) {
    possibleAnswers += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  //check if user chose at least one character type
  if (possibleAnswers === ""){
  alert("You must include at least one character type");
  return generatePassword();
  }
  //generate random password at the length user specified in the beginning
  var newPassword = "";
  for (var i = 1; i <= passwordLength; i++) {
    newPassword += possibleAnswers.charAt(Math.floor(Math.random() * possibleAnswers.length));
  }
  return newPassword;
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