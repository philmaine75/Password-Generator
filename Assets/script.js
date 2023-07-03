// Assignment Code
var generateBtn = document.querySelector("#generate");
//var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var numbers = ["0","1","2","3","4","5","6","7","8","9"]




// Write password to the #password input
function writePassword() {
  var passwordLength = ["8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54",
"55","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128",]
  var length = prompt("What is your desired password length? (Between 8-128)");
  if(!length){
    return}
  if(passwordLength.includes(length)){
    alert("You have selected a length of " + length )
  } else{alert("Please ensure you select and integer between 8 and 128")
return}
  var upperCase = prompt("Do you want to include uppercase characters? (y or n)")
  if(!upperCase){return}
  var caseSelect = ["y","n"]
  if(upperCase == "y"){
    alert("Your password will contain uppercase letters")
  }
   else if(upperCase == "n"){
    alert("Your password will NOT contain uppercase letters")
   }
   else{alert("Please ensure you select either 'y' or 'n'")
return}
  var lowerCase = prompt("Do you want to include lowercase characters? (y or n)")
  if(!lowerCase){return}
  if(lowerCase == "y"){
    alert("Your password will contain lowercase letters")
  }
   else if(lowerCase == "n"){
    alert("Your password will NOT contain lowercase letters")
   }
   else {"Please ensure you select either 'y' or 'n'"
  return}
  var numeric = prompt("Do you want to include numbers? (y or n)")
  if(!numeric){return}
  if(numeric == "y"){
    alert("Your password will contain numbers")
  }
   else if(numeric == "n"){
    alert("Your password will NOT contain numbers")
   }
   else{"Please ensure you select either 'y' or 'n'"
   return}
   alert("Generating password")
  if (upperCase == "y" && lowerCase == "y" && numeric == "y"){
    //var charset = [].concat(upperChars, lowerChars, numbers,);
    var charset = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
    var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
  }
  else if(upperCase == "y" && lowerCase == "y" && numeric == "n"){
      //var charset = [].concat(upperChars, lowerChars,);
      var charset = "qwertyuiopasdfghjklzxcvbnm"
      var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
  }
  else if (upperCase == "y" && lowerCase == "n" && numeric == "n"){
    //var charset = upperChars;
    var charset = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
  }
  else if (upperCase == "y" && lowerCase == "n" && numeric == "y"){
    //var charset = [].concat(upperChars, numbers,);
    var charset = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
  }
  else if (upperCase == "n" && lowerCase == "n" && numeric == "y"){
    //var charset = numbers;
    var charset = "1234567890"
    var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
  }
  else if (upperCase == "n" && lowerCase == "y" && numeric == "y"){
    //var charset = [].concat(lowerChars, numbers,);
    var charset = "qwertyuiopasdfghjklzxcvbnm1234567890"
    var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
  }
  else if (upperCase == "n" && lowerCase == "y" && numeric == "n"){
    //var charset = lowerChars;
    var charset = "qwertyuiopasdfghjklzxcvbnm"
    var password = ""
    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);
      password += charset.substring(randomNumber, randomNumber +1);
     }
     alert(password)
}
else {alert("Please select at least one of the three types of characters")
return
}


var passwordText = document.querySelector("#password");
passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
