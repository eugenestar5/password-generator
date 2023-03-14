// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordText.setAttribute("style", "color: red; font-weight: bold; text-align: center; padding-top: 50px;")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Password Criteria Object
var passwordCriteria = {
  //special characters array
  passwordCharacter: ["$", "%","!", "\"", "#", "&", "\'", "(", ")", "*", "+", ",", "[", "]", "^", "_", "`", "{", "}", "|", "~","-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@"],

  //uppper case array
  passwordUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //numbers array
  passwordNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //lower case array
  passwordLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //password length property
  passwordLength: 0

}



function generatePassword() {

  //user input prompt variables
  var lowerCase;
  var upperCase;
  var numbers;
  var specialCharacters;
  var pwdLength = 0;

  //generated password variable
  var result = "";

  while (pwdLength < 8 || pwdLength > 128) {
    //checking the length of password
    pwdLength = prompt("How many password Characters do you want? \nPassword must be between 8 and 128 characters.");

    //if user cancel
    if (pwdLength === null) {
      return "Re-start your secure password process";
    }
    else {
      //check to see if user enter's an integer
      if (!isFinite(pwdLength)) {
        alert("You did not enter a number");
        return "Re-start your secure password process";
      }
      else {
        //check if password meets length criteria
        if (pwdLength < 8 || pwdLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Re-start your secure password process";
        }
        else {

          //call prompts function for criteria
          showPrompts();

          //Add Characters based on cateria till passwordLength in the method equals the user input password
          while (passwordCriteria.passwordLength < pwdLength) {
            //conditional if statement to make sure the user selects at least one of the criteria  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("Select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              
              //if lowercase is selected grab a letter from the lowecase array and add it to the result  and update the password lenth by one
              if (lowerCase === true && passwordCriteria.passwordLength < pwdLength) {
                var lcase = passwordCriteria.passwordLowerCase[Math.floor(Math.random() * 26)]
                result = result + lcase;
                passwordCriteria.passwordLength++;
              }

                  
              //if special character is selected grab a letter from the lowecase array and add it to the result  and update the password lenth by one         
              if (specialCharacters === true && passwordCriteria.passwordLength < pwdLength) {
                var schar = passwordCriteria.passwordCharacter[Math.floor(Math.random() * 32)]
                result = result + schar;
                passwordCriteria.passwordLength++;
              }

             
              //if uppercase is selected grab a letter from the lowecase array and add it to the result  and update the password lenth by one
              if (upperCase === true && passwordCriteria.passwordLength < pwdLength) {
                var ucase = passwordCriteria.passwordUpperCase[Math.floor(Math.random() * 26)]
                result = result + ucase;
                passwordCriteria.passwordLength++;
              }

             
              //if a number is selected grab a letter from the lowecase array and add it to the result  and update the password lenth by one
              if (numbers === true && passwordCriteria.passwordLength < pwdLength) {
                var num = passwordCriteria.passwordNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                passwordCriteria.passwordLength++;
              }
            }
          }
        }
      }
    }


     //Generated password that will be outputted when this function is called
     return result;

    //functions to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialCharacters = confirm("Do you want to use any special characters?");
    }

   


  }

}