// Assignment code here
function generatePassword() {
  console.log("test");
  window.alert("Please see following prompts for password criteria. Select length and atleast one character type! ");

  //prompt to stor password length
  var passwordLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters!"));
  //checks to see if lenght is acceptable if not, start over
  if (passwordLength > 7 && passwordLength < 129 && Number.isInteger(passwordLength)) {
    window.confirm("Are you sure you would like a password lenght of " + passwordLength + "?");
  }else {
    window.alert("Your pasword length is not acceptable. Please try again!");
    return generatePassword();
  }

  var isLowerCase = window.confirm("Would you like the password to contain lower case characters?")
  console.log(isLowerCase); // testing what returns from confirm prompt

  var isUpperCase = window.confirm("Would you like the password to contain upper case characters?")
  console.log(isUpperCase); // testing what returns from confirm prompt

  var isSpecialCharacter = window.confirm("Would you like the password to contain special characters?")
  console.log(isSpecialCharacter); // testing what returns from confirm prompt

  //checks to see if atleast one character type was selected, if not start over
  if ( !isLowerCase && !isUpperCase && !isSpecialCharacter) {
    window.alert("You need to select atleast one character type");
    return generatePassword();
  }









  return "placeholder";
} // end of generate password functino

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