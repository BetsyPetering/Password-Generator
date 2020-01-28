//Set confirmation variables to false
var useNum = confirm("Should Password Contain Numbers?");
var useSym = confirm("Should Password Contain Symbols?");
var useUCs = confirm("Should Password Contain Upper Case Letters?");
var useLCs = confirm("Should Password Contain Lower Case Letters?");

console.log('useNum = ' + useNum);
console.log('(useSym = ' + useSym);
console.log('useUCs = ' + useUCs);
console.log('useLCs = ' + useLCs);

//test if user entered any type of character, only go on if they have chosen one or more
if ((useNum === true) || (useSym === true) || (useUCs === true) || (useLCs === true)) {
    console.log('line 14');

    //Ask for their number of digits in this password between 8 and 128
    var pswdLength = prompt("Passwords will be from 8 to 128 characters long. How many characters do you want?");
    console.log('pswdLength = ' + pswdLength);

    //Make sure number is from 8 to 128
    if ((pswdLength >= 8) && (pswdLength <= 128)); {
        console.log('line 22 ');

        var arrLen = 0;

        //determine length of array needed to hold the types of character to use
        if (useNum === true) {
            arrLen++;
            console.log('after useNum arrLen = ' + arrLen);
        }
        if (useSym === true) {
            arrLen++;
            console.log('after useSym arrLen = ' + arrLen);
        }
        if (useUCs === true) {
            arrLen++;
            console.log('after useUCs arrLen = ' + arrLen);
        }
        if (useLCs === true) {
            arrLen++;
            console.log('after useLCs arrLen = ' + arrLen);
        }

        console.log('line 44 arrLen = ' + arrLen);
        //pre-make the arrays so we will then change the 

        if (arrLen === 1) {
            var types = ['a'];
        }
        if (arrLen === 2) {
            var types = ['a', 'b'];
        }
        if (arrLen === 3) {
            var types = ['a', 'b', 'c'];
        }
        if (arrLen === 4) {
            var types = ['a', 'b', 'c', 'd'];
        }

        console.log('types = ' + types);
        console.log('line 61 arrLen = ' + arrLen);

        //make a counter for the array of charaters that will be used
        var c = 0;

        if (useNum === true) {
            types[c] = 'number';
            c++;
        }
        if (useSym === true) {
            types[c] = 'symbol';
            c++;
        }
        if (useUCs === true) {
            types[c] = 'upper';
            c++;
        }
        if (useLCs === true) {
            types[c] = 'lower';
        }

        console.log('line 82 types = ' + types);
        console.log('line 83 c = ' + c);

        //Create arrays for symbols, upper case letters, and lower case letters
        var symbolArr = ["!", "0", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
        var upperCaseArr = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        //start making a password! Length of Password is "pswdLength"


        //determine the type of character to make
        var charType = Math.floor(Math.random() * c) + 1;
        console.log('line 90 charType = ' + charType);

        //use charType to pull the Type of character to pick at random
        if (types[charType] === "number") {
            var n = Math.floor(Math.random() * 10) + 1;
        }
        else {
            if (types[charType] === "symbol") {
            var n = Math.floor(Math.random() * symbolArr.length) + 1:
        }
        }




        // if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o")
        
        for (var i = 0; i < 10; i++) {
            // Generate a random number between 1 and 10
            var number = Math.floor(Math.random() * 10) + 1;
        }






        var checkBoxes = document.querySelector("#make");

        
    }
}
// else {
//             alert("Sorry, we don't make passwords of that length, no Password for you!");
//         }
// }

// else {
//         alert("Because no type of character was selected, no Password for You!");
//     }

//Listen for "Generate Password" click

// genPass.addEventListener("click", function (event) {
//     window.location.href = images[index];
// });

// checkBoxes.addEventListener("click", function (event) {
//     event.preventDefault();

// });


// To make a number
// for (var i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
//     var number = Math.floor(Math.random() * 10) + 1;
// }


//Choose the array number that the symbol will be
// for (var i = 0; i < symbolArr.length; i++) {
//     var number = Math.floor(Math.random() * symbolArr.length) + 1;
// }

//listen for the options chosen






// Loop the number of times needed
// for (var i = 0; i < 10; i++) {
    // Generate a random number between 1 and 10
    // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
    // var num = Math.floor(Math.random() * 10) + 1;

    // Display in console
//     console.log(num);
// }



// function newFunction() {
//     arrLen++;
// }
    // var charNum = document.getElementById('charNum')
    // var upperCase = document.getElementById('upperCase')
    // var lowerCase = document.getElementById('lowerCase')
    // var numbers = document.getElementById('numbers')
    // var symbols = document.getElementById('symbols')
    // var form = document.getElementById('pswdForm')




    // form.addEventListener('submit', function (e) {
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
