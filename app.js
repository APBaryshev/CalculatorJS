const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const submitBtn = document.getElementById('submit')
const multiplyBtn = document.getElementById('multiply')
const shareBtn = document.getElementById('share')
let action = "+"
let action2 = "*"

plusBtn.onclick = function () {
	action = '+'
}

minusBtn.onclick = function () {
	action = '-'
}

multiplyBtn.onclick = function () {
	action = '*'
}

shareBtn.onclick = function () {
	action = '/'
}

function printResult (result) {
	if (result < 0) {
		resultElement.style.color = 'red'
		} else {
			resultElement.style.color = 'green'
		}
		resultElement.textContent = result
}

function calculateNumbersAction (inp1, inp2, actionSymbol) {
	const num1 = Number(inp1.value)
	const num2 = Number(inp2.value)
	if (actionSymbol == '+') {
	return num1 + num2
}
	if (actionSymbol == '-') {
	return num1 - num2
}
	if (actionSymbol == '*') {
	return num1 * num2
}
	if (actionSymbol == '/') {
	return num1 / num2
}
}

submitBtn.onclick = function () {
	const result = calculateNumbersAction (input1, input2, action)
	printResult (result)
	//if (action == '+') {
	//	const sum = Number(input1.value) + Number(input2.value)
	//	printResult (sum)
	//	} else	if (action == '-') {
	//	const sum = Number(input1.value) - Number(input2.value)
	//	printResult (sum)
	//}
}