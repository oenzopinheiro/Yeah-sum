var inputOne = document.querySelector('#inputOne')
var inputTwo = document.querySelector('#inputTwo')
var result = document.querySelector('span')
let calc = 0

function sum() {
    result.innerHTML = parseInt(inputOne.value) + parseInt(inputTwo.value)
}