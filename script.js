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
var passwordLength = parselnt(prompt("How many characters would you like your password to have?")
);
//Confirming if password length entered by user is a number. Prompt ends if user did not enter a number.
if(isNaN(passwordLength)===true) {
  alert("Password length must be a number. No letters!");
  return;
}
// Confirming if password is between 8 and 128 characters long. Prompt ends if it's false.
if(passwordLength <= 8 && passwordLength >= 128){
  alert("Password length must be between 8 and 128 characters long.");
  return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

