// Assignment code here
upperCase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
specialCharacters =[" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
  console.log("test");
  window.alert("Please see following prompts for password criteria. Select length and atleast one character type! ");

  //prompt to store password length
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

  var isNumbers = window.confirm("Would you like the password to contain numbers?")
  console.log(isNumbers); // testing what returns from confirm prompt

  var isSpecialCharacters = window.confirm("Would you like the password to contain special characters?")
  console.log(isSpecialCharacters); // testing what returns from confirm prompt

  //checks to see if atleast one character type was selected, if not start over
  if ( !isLowerCase && !isUpperCase && !isNumbers && !isSpecialCharacters) {
    window.alert("You need to select atleast one character type");
    return generatePassword();
  }

  //empty arrays to hold all the characters if they are selected
  var emptyPassword = []


  if (isLowerCase) {
    emptyPassword.concat(lowerCase);
  }

  if (isUpperCase) {
    emptyPassword.concat(upperCase);
  }

  if (isNumbers) {
    emptyPassword.concat(numbers);
  }

  if (isSpecialCharacters) {
    emptyPassword.concat(specialCharacters);
  }

  var allPasswordCharacters = emptyPassword;
  console.log(allPasswordCharacters);



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