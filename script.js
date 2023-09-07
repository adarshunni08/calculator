function addition(a,b){
    let sum = a+b;
    return sum
};

function substraction(a,b){
    let diff = a-b;
    return diff
};

function multiplication(a,b){
    let product = a*b;
    return product
};

function division(a,b){
    if (b==0){
        return "Error"
    }
    let quotient = a/b;
    return quotient.toFixed(2)
};

function operation(num1, op, num2){
    if (op == "+"){
        return addition(num1,num2)
        
    }
    else if (op == "-"){
        return substraction(num1,num2)
    }
    else if (op == "*"){
        return multiplication(num1,num2)
    }
    else if (op == "÷"){
        return division(num1,num2)
    }
}

const button = document.querySelectorAll('.show')

const displayOne = document.querySelector('.extra')

const displayTwo = document.querySelector('.screen')

const number = document.querySelectorAll('.number')

const sign = document.querySelectorAll('.sign')

const equalSign = document.querySelector('.equals')

let result;
let num1;
let op ;
let num2;

for (let i=0; i<number.length; i++){
    number[i].addEventListener('click', () => {
        if (displayOne.textContent != 0){
            displayOne.textContent += number[i].textContent
        }
        else{
            displayOne.textContent = number[i].textContent
        }
    })
}

for (let j=0; j<sign.length; j++){
    sign[j].addEventListener('click', () => {
        if (!displayTwo.textContent){
            result = displayOne.textContent
            displayTwo.textContent = result + sign[j].textContent
            num1 = Number(result)
            op = sign[j].textContent
            console.log(op)
            displayOne.textContent = ""
        }
        else{
            num2 = Number(displayOne.textContent)
            result = operation(num1,op,num2)
            num1 = result
            op = sign[j].textContent
            displayTwo.textContent = result + sign[j].textContent
            displayOne.textContent = ""
            }
        })
        
}

equalSign.addEventListener('click', () => {
    num2 = Number(displayOne.textContent)
    result = operation(num1,op,num2)
    num1 = result
    displayOne.textContent = result
    displayTwo.textContent = ""
})


const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    if (displayOne.textContent){
        displayOne.textContent = 0
    }
})

const deleteKey = document.querySelector('.delete')
deleteKey.addEventListener('click', () => {
    displayOne.textContent = ""
    displayTwo.textContent = ""
})


