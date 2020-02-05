// TA's comments from originally handed in work:

//Change the variable initializing to checkbox booleans
// A good place to get started in this sort of assignment is to first 
//     (1) lay out all the things you are going to use, like buttons, input fields, etc. 
//     (2) list all the functions you will need to write

// var inputButton = document.getElementById('input-button'); // etc etc
// var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
// function generatePassword(options) { } // haven't written yet
//----------------------------------------------------------------------------------------------------------------------------------------

//Create arrays
var types = ["number", "symbol", "upper", "lower"];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ["!", "0", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var array = ['types', 'number', 'symbol', 'upper', 'lower'];
var passWord = [];

//QUESTION:  which way to create the array of digit types? By make each one a boolean of true for using it or false for not? 
//                          Or by the system below of adding the type to an array - then use that array for the pool from which to choose the next digit type

//create the array with the types of characters to use

function genPassword() {
     
    var digits = document.getElementById('length');
    var number = document.getElementById('input-number');
    var symbol = document.getElementById('input-symbol');
    var upper = document.getElementById('input-upper');
    var lower = document.getElementById('input-lower');
    console.log("digits = " + digits.value);
    console.log("number = " + number.value);
    console.log("symbol = " + symbol.value);
    console.log("upper = " + upper.value);
    console.log("lower = " + lower.value);

    var arrLen = 0;
    var types = [];

    console.log("before making types[] ");

    if (number.value) {
        types[arrLen] = "number";
        arrLen++;
    }
    if (symbol.value) {
        types[arrLen] = "symbol";
        arrLen++;
    }
    if (upper.value) {
        types[arrLen] = "upper";
        arrLen++;
        console.log("I'm in upper");
    }
    if (lower.value) {
        types[arrLen] = "lower";
        arrLen++;
    }

    console.log("after making types[] ");

    console.log("types array = " + types);

    //create a function that will return a random number
    //in our case, we will use this as the node of the given array to choose

    function rand(arr) {        
        console.log("inside rand function");
        var node = Math.floor(Math.random() * arr.length);
        return node;
    }
    
    //run through the randomizing functions, one to choose the array, the next to 
    //choose the node, and do this for as many digits as were chosen

    for (var i = 0; i < digits.value; i++) {

        console.log("inside the for loop");
        console.log("i = " + i);

        //t  will be the node of types[] to use next
        var t = rand(types);

        //use t to extract the next character array
        var nextArr = types[t];

        //use the rand function to choose the node of the character array 
        place = rand(nextArr);

        //make the next digit of the password node "place" in "nextArr" array
        passWord[i] = nextArr[place];

        console.log("passWord[i] = " + passWord[i]);
        console.log("this is place = " + place);
    }
    alert("passWord = " + passWord);
}

document.getElementById("make").addEventListener("click", genPassword);
