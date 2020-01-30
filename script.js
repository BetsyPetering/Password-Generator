//Set confirmation variables to false

var useNum = confirm("Should Password Contain Numbers?");
var useSym = confirm("Should Password Contain Symbols?");
var useUCs = confirm("Should Password Contain Upper Case Letters?");
var useLCs = confirm("Should Password Contain Lower Case Letters?");

console.log('useNum = ' + useNum);
console.log('useSym = ' + useSym);
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
        var types = [];
        //create the array with the types of characters to use
        if (useNum === true) {
            types[arrLen] = "number";
            arrLen++;
        }
        if (useSym === true) {
            types[arrLen] = "symbol";
            arrLen++;
        }
        if (useUCs === true) {
            types[arrLen] = "upper";
            arrLen++;
        }
        if (useLCs === true) {
            types[arrLen] = "lower";
            arrLen++;
        }
        console.log('array types = ' + types);
        console.log('line 45 arrLen = ' + arrLen);

        //At this point types is the array holding the types of characters we will use

        //Create arrays for symbols, upper case letters, and lower case letters
       // for the numbers, we will use the random number generator to choose from 0 - 9
        var symbolArr = ["!", "0", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
        var upperCaseArr = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
       
        //make the array for the password
        var passWord = [];
        console.log('line 57 (new array should be empty) passWord array = ' + passWord);

        //start making a password! Length of Password is "pswdLength"
        for (var i = 0; i < pswdLength; i++) {

            //determine the type of character to make by picking the node of the array called types
            var node = Math.floor(Math.random() * types.length);
            console.log('line 64 node = ' + node);

            //use node to pull the Type of character to pick at random
            if (types[node] === "number") {
                console.log('making a number');
                passWord[i] = Math.floor(Math.random() * 10) + 1;
                console.log('passWord node ' + i + ' is ' + passWord[i]);
            }
            else if (types[node] === "symbol") {
                console.log('making a symbol');
                s = Math.floor(Math.random() * symbolArr.length);
                passWord[i] = symbolArr[s];
                console.log('passWord node ' + i + ' is ' + passWord[i]);
            }
            else if (types[node] === "upper") {
                console.log('making a upper');
                u = Math.floor(Math.random() * upperCaseArr.length);
                passWord[i] = upperCaseArr[u];
                console.log('passWord node ' + i + ' is ' + passWord[i]);
            }
            else {
                console.log('making a lower');
                l = Math.floor(Math.random() * lowerCaseArr.length);
                passWord[i] = lowerCaseArr[l];
                console.log('passWord node ' + i + ' is ' + passWord[i]);
            }
            console.log('Final password[' + i + '] = ' + passWord[i]);
        }
    }
}
///Final Password is now in passWord array

