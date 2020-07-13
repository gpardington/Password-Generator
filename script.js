// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of lowercase characters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Array of numbers
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
//Array of special characters
var specialChar = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>',"=",'?','@','[',']','/','^','_','`','{','}','|','~'];

// Password detail prompts
function getPasswordOptions() {
//Variable to store the length of the password chosen by user  
var passwordLength = parselnt(
  prompt("How many characters would you like your password to have?")
);
//Confirming if password length entered by user is a number. Prompt ends if user did not enter a number.
if(isNaN(passwordLength)===true) {
  alert("Password length must be a number. No letters!");
  return;
}
// Confirming if password is between 8 and 128 characters long. Prompt ends if it's false.
if(passwordLength < 8 && passwordLength > 128){
  alert("Password length must be between 8 and 128 characters long.");
  return;
}

//Store answer regarding use of lowercase letters
var hasLowerCase = confirm(
  "Click OK to include lowercase letters."
);
//Store answer regarding use of uppercase letters
var hasUpperCase = confirm(
  "Click OK to include uppercase letters."
);
//Store answer regarding use of numbers
var hasNumbers = confirm(
  "Click OK to include numbers."
);
//Store answer regarding use of special characters
var hasSpecialChar = confirm(
  "Click OK to include special characters."
);

//Storing ALL of user's answers
var passwordOptions = {
  passwordLength: passwordLength,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumbers: hasNumbers,
  hasSpecialChar: hasSpecialChar
};

return passwordOptions;
}
//Function that gets a random element from a random array
function getRandom(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}
//Function that generates password
function generatePassword(){
  var options = getPasswordOptions();
  var result = [];
 //Array that stores different types of characters in password
 var possibleCharacters = [];
 //Array that stores selected types of characters since not all types of characters MUST be included
 var chosenCharacters = [];
//Add array of lowercase letters into the array of possible characters and then move to chosen characters
if(options.hasLowerCase){
  possibleCharacters = possibleCharacters.concat(lowerCase);
  chosenCharacters.push(getRandom(lowerCase));
}
//Add array of uppercase letters into the array of possible characters and then move to chosen characters
if(options.hasUpperCase){
  possibleCharacters = possibleCharacters.concat(upperCase);
  chosenCharacters.push(getRandom(upperCase));
}
//Add array of numbers into array of possible characters and then move to chosen characters
if(options.hasNumbers){
  possibleCharacters = possibleCharacters.concat(numbers);
  chosenCharacters.push(getRandom(numbers));
}
//Add array of special characters into array of possible characters and then move to chosen characters
if(options.hasSpecialChar){
  possibleCharacters = possibleCharacters.concat(specialChar);
  chosenCharacters.push(getRandom(specialChar));
}
//For-loop to generate a password that matches the character length selected by the user
for (var i = 0;i < options.length; i++){
  var possibleCharacters = getRandom(possibleCharacters);
  result.push(possibleCharacters);
}
//Include 1 or more chosen character in the password result with another for-loop
for (var i = 0;i < chosenCharacters.length; i++){
  result[i] = chosenCharacters[i];
}


