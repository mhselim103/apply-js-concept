


function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;                     
    }
    return fact;              //return value and variable have to be same 
}

let fact = factorial(9);
console.log(fact);


let secondFactorial = factorial(11);
console.log("second factorial ", secondFactorial);