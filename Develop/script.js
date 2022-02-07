// Assignment code here
//function to get the users choice of length for password
function getLength () {
  var length = "";
  while (length < 8 || length > 128 || isNaN(length) ) {
    length = parseInt(window.prompt("Please select a password lenght between 8 and 128 characters!"));
  }
  // cof
  if (length > 7 || length < 129 || Number.isInteger(length) ) {
    var confirmLength = window.confirm("Are you sure you would like to continue with a password length of " + length + "?");
    if (confirmLength) {
      window.alert("Your password length is " + length + " characters long!");
    }
  }

  console.log("you chose " + length);
  return length;
}


function generatePassword() {
  console.log("test");

  window.alert("Please see following prompts for password criteria. Select length and atleast one character type! ");

  getLength();

  return "placeholder";
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
