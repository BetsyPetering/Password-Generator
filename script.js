//I've only just begun.......


const charNum = document.getElementById('charNum')
const upperCase = document.getElementById('upperCase')
const lowerCase = document.getElementById('lowerCase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const form = document.getElementById('pswdForm')          




form.addEventListener('submit', function(e) {
    e.preventDefault()
    const charNum = charNumNumber.value
    const upperCase = includeUpperCaseElement.checked
    const lowerCase = includeLowerCaseElement.checked
    const numbers = includeNumbersElement.checked
    const symbols = includeSymbols.checked

    const password = generatePassword(charNum, upperCase, lowerCase, numbers, symbols)
}
