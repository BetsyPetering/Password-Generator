
var finalWordEl = document.getElementById('finalWord');

var lengthEl = document.getElementById('length');

var upperEl = document.getElementById('upper');
var lowerEl = document.getElementById('lower');
var numberEl = document.getElementById('number');
var symbolEl = document.getElementById('symbol');

var generateEl = document.getElementById('generate');

var randomFun = {
	lower: getLower,
	upper: getUpper,
	number: getNumber,
	symbol: getSymbol
}

generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowerEl.checked;
	var hasUpper = upperEl.checked;
	var hasNumber = numberEl.checked;
    var hasSymbol = symbolEl.checked;
    
    console.log(length);
    console.log(hasLower);
    console.log(hasUpper);
    console.log(hasNumber);
    console.log(hasSymbol);
	
	finalWordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    console.log(typesCount);
    console.log(typesArr);
	
	if(typesCount === 0) {
		return '';
	}
		
	for(i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFun[funcName]();
		});
	}
	
	var finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

//random letters, numbers pulled from www.net-comber.com/charset.html

function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
	var symbols = '!@#`~$%^&*-_=+(){}[]|\:;<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
