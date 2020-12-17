// Assignment Code
var generateBtn = document.querySelector("#generate")

// Write password to the #password input

var isUppercase = false
var isLowercase = false
var isNumber = false
var isSpecial = false
var alpha = ("abcdefghijklmnopqrstuvwxyz").split("")
var upperAlpha = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
var numbers = ("123456789").split("")
var special = ("!@#$%^&*(").split("")
var randomIndex = 0
var password = ""
console.log(alpha)
console.log(upperAlpha)
console.log(numbers)
console.log(special)

function writePassword() {

  var passwordsize = prompt("How long do you want your password? (8-128 characters)")
  console.log(passwordsize)
  passwordsize = parseInt(passwordsize)
  if (passwordsize >= 8 && passwordsize <= 128) {

    isUppercase = confirm("Do you want a uppercase?")
    console.log(isUppercase)

    isLowercase = confirm("Do you want a lowercase?")
    console.log(isLowercase)
    isNumber = confirm("Do you want a number?")
    console.log(isNumber)
    isSpecial = confirm("Do you want a special character?")
    console.log(isSpecial)
  for (let i = 0; password.length <passwordsize ; i++) {
    if (isUppercase) {
      randomIndex = Math.floor(Math.random() * upperAlpha.length)
      console.log(randomIndex)
      console.log(upperAlpha[randomIndex])
      password = password + upperAlpha[randomIndex]
      console.log(password)
    }

    if (isLowercase) {
      randomIndex = Math.floor(Math.random() * alpha.length)
      console.log(randomIndex)
      console.log(alpha[randomIndex])
      password = password + alpha[randomIndex]
      console.log(password)
    }

    if (isNumber) {
      randomIndex = Math.floor(Math.random() * numbers.length)
      console.log(randomIndex)
      console.log(numbers[randomIndex])
      password = password + numbers[randomIndex]
      console.log(password)
    }
    if (isSpecial) {
      randomIndex = Math.floor(Math.random() * special.length)
      console.log(randomIndex)
      console.log(special[randomIndex])
      password = password + special[randomIndex]
      console.log(password)
    }
    
  }
    


   
    //alert("Correct")


  document.getElementById("password").value=password
   
  }
  else {
    alert("Invalid entry")
  }

  
  var passwordText = document.querySelector("#password")



  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
