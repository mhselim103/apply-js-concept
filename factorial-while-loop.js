
/*
// choto theke boro 


function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(9);
console.log(myFactorial);

*/


// ulta boro theke choto 


function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const myFact = getFactorial(8);
console.log(myFact);
