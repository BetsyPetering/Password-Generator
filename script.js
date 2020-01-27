//Set confirmation variables to false
var useNum = confirm("Should Password Contain Numbers?");
var useSym = confirm("Should Password Contain Symbols?");
var useUCs = confirm("Should Password Contain Upper Case Letters?");
var useLCs = confirm("Should Password Contain Lower Case Letters?");

console.log(useNum);
console.log(useSym);
console.log(useUCs);
console.log(useLCs);

if ( (useNum = true) || (useSym = true) || (useUCs = true) || (useLCs = true) ) {


console.log(useNum);
console.log(useSym);
console.log(useUCs);
console.log(useLCs);

console.log("got to here")


var checkBoxes = document.querySelector("#make");

//Create arrays for symbols, upper case letters, and lower case letters
var symbolArr = ["!", "0", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var upperCaseArr = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']




}
else {
    alert("Because no type of character was selected, no Password for You!");
}

//Listen for "Generate Password" click

// genPass.addEventListener("click", function(event) {
//   window.location.href = images[index];
// });

// checkBoxes.addEventListener("click", function(event) {
//         event.preventDefault();
//         ;
//         });


// To make a number
//for (var i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
//     var number = Math.floor(Math.random() * 10) + 1;
// }


//Choose the array number that the symbol will be
// for (var i = 0; i < symbolArr.length; i++) {
//     var number = Math.floor(Math.random() * symbolArr.length) + 1;
// }

//listen for the options chosen
      





      // Loop the number of times needed
    //   for (var i = 0; i < 10; i++) {
        // Generate a random number between 1 and 10
        // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
        // var num = Math.floor(Math.random() * 10) + 1;

        // Display in console
        // console.log(num);
    //   }


// var charNum = document.getElementById('charNum')
// var upperCase = document.getElementById('upperCase')
// var lowerCase = document.getElementById('lowerCase')
// var numbers = document.getElementById('numbers')
// var symbols = document.getElementById('symbols')
// var form = document.getElementById('pswdForm')          




// form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     var charNum = charNumNumber.value
//     var upperCase = includeUpperCaseElement.checked
//     var lowerCase = includeLowerCaseElement.checked
//     var numbers = includeNumbersElement.checked
//     var symbols = includeSymbols.checked

//     var password = generatePassword(charNum, upperCase, lowerCase, numbers, symbols);
// }






//So, I really wanted to make this start with a do while loop so if they kept
//answering no to any of the character types, it would just ask them again
//But I can't make this work, so on to the next one
// do {
//     useNum = confirm("Should Password Contain Numbers?");
//     useSym = confirm("Should Password Contain Symbols?");
//     useUCs = confirm("Should Password Contain Upper Case Letters?");
//     useLCs = confirm("Should Password Contain Lower Case Letters?");
// }
//     while ((useNum = false) && (useSym = false) && (useUCs = false) && (useLCs = false));

// console.log(useNum);
// console.log(useSym);
// console.log(useUCs);
// console.log(useLCs);