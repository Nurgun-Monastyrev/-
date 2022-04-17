const number1 = document.querySelector('#inputNumb1')
const result1 = document.querySelector('#resultFirstExecise1')

function getAge(num) {
    return Number.parseInt(num, 10) + 1;
}

number1.addEventListener("input", () => {
    result1.textContent = getAge(number1.value)
})

const number2_1 = document.querySelector('#inputNumb2_1')
const number2_2 = document.querySelector('#inputNumb2_2')
const result2 = document.querySelector('#resultFirstExecise2')

function getRemainder(num, del) {
    num = Number.parseInt(num, 10)
    del = Number.parseInt(del, 10)

    return num % del
}

number2_2.addEventListener("input", () => {
    if (number2_1.value != '' && number2_2.value != '') {
        result2.textContent = getRemainder(number2_1.value, number2_2.value)
    }
})

const number3 = document.querySelector('#inputNumb3')
const result3 = document.querySelector('#resultFirstExecise3')

function faceControl(num) {
    num = Number.parseInt(num, 10)

    if (num >= 18)
        return "Welcome"
    else
        return "Отказ"
}

number3.addEventListener("input", () => {
    result3.textContent = faceControl(number3.value)
})

const number4 = document.querySelector('#inputNumb4')
const result4 = document.querySelector('#resultFirstExecise4')

function getNextAge(num) {
    if (num == '')
        return 0
    else
        return num = Number.parseInt(num, 10) + 1
}

result4.textContent = getNextAge(number4.value)
number4.addEventListener("input", () => {
    result4.textContent = getNextAge(number4.value)
})

const number5 = document.querySelector('#inputNumb5')
const result5 = document.querySelector('#resultFirstExecise5')

function canRide(num) {
    return num >= 140
}

number5.addEventListener("input", () => {
    result5.textContent = canRide(number5.value)
})