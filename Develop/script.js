// DOM querySelector method
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//sign four characters and store them into var for later, the system can  use them to generate random password it should write like '1', '2', but i used split instead
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!@#$%^&*()_+=-{}[]'?/<>.,";

// create empty var to store information
var passwordChars =[];
var password ="";

//create a function for generate password
function generatePassword() {
  var passwordLength = prompt(" please enter a number between 8-128 to generate randomPassword ");// prompt : ask the user to enter passwordlength

  //this if statment  if the password is less than 8 or more than 128 or (isNaN) not a number then alert user and return to regeneratePassword
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("invild!!! please enter a number between 8-128 ");
    return generatePassword(); // reprompt fucntion generatePassword if the user didn't enter vaild passwordlength
  }

  //confirm with user what they want to inlude in thier password and sign it to a variables for generate random pass word
  var containUpcase = confirm("Click OK if you want include uppercase letter");
  var containLowcase = confirm("Click OK if you want include lowercase letter");
  var containNmbers = confirm("Click OK if you want include number");
  var containSpecialchars = confirm("Click OK if you want include special charters");


  // determine. if user didn't pick any character type then alert  it least pick one character type if you want random password
  if (containUpcase === false && containLowcase === false && containNmbers ===false && containSpecialchars === false) { // if all the var is false(!) then alert please pick at least one character type 
    alert("plese pick at least one character type");
    return generatePassword(); // if user didn't pick anything repropt plese pick at least one character
  }

  
  var passwordChars = []; // create a empty array[] to store random password to var passwordChars that is return true from user 

  if (containUpcase === true) {// if user cilck OK to include uppercase char then store it to array
    passwordChars = passwordChars + upperCase.split( );// change all my upperCase into single char strings for password and add the random password to passwordChar array
  }
  if (containLowcase === true) {
    passwordChars = passwordChars + lowerCase.split( );
  }
  if (containNmbers === true) {
    passwordChars = passwordChars + numbers.split( );
  }
  if (containSpecialchars === true) {
    passwordChars = passwordChars + specialChars.split( );
  }
  

  //  for loop to generate password that between 0 - passwordLength
  var password = ""; // store my random password
  for (var i = 0; i < passwordLength; i++) {
    var randompassword = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[randompassword];
  }
  return password; 
}


// display randompassword 
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);

