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
  var passwordChar = "";
  var passwordLength = prompt("Password Length? 8-128");
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must be greater than 8 and less than 128 charaters");
  }

  var passwordUpper = confirm("Do you want UpperCase letters?");
 if (passwordUpper)
  passwordChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(passwordChar);
//
  var passwordLower = confirm("Do you want LowerCase letters?");
  if (passwordLower)
   passwordChar += "abcdefghijklmnopqrstuvwxxyz";
   console.log(passwordChar);
}


function randomUpperChar() {
  // example set of special chars as a string in no particular order
  var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // generating a random index into the string and extracting the character at that position
  s = s.substr(Math.floor(s.length * Math.random()), 1);
  console.log(s)
  return s
}

function randomSpecialChar() {
  // example set of special chars as a string in no particular order
  var s = "!\"§$%&/()=?\u{20ac}";

  // generating a random index into the string and extracting the character at that position
  s = s.substr(Math.floor(s.length * Math.random()), 1);
  console.log(s)
  return s
} 
function randomLowerChar() {
  // example set of special chars as a string in no particular order
  var s = "abcdefghijklmnopqrstuvwxyz";

  // generating a random index into the string and extracting the character at that position
  s = s.substr(Math.floor(s.length * Math.random()), 1);
  console.log(s)
  return s
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