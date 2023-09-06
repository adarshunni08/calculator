function addition(a,b){
    let sum = a+b;
    console.log(sum) 
};

function substraction(a,b){
    let diff = a-b;
    console.log(diff)
};

function multiplication(a,b){
    let product = a*b;
    console.log(product)
};

function division(a,b){
    let quotient = a/b;
    console.log(quotient)
};

function operation(num1, op, num2){
    if (op == "+"){
        addition(num1,num2)
    }
    else if (op == "-"){
        substraction(num1,num2)
    }
    else if (op == "*"){
        multiplication(num1,num2)
    }
    else if (op == "/"){
        division(num1,num2)
    }
    else{
        console.log("Invalid Operation")
    }
};
