

/*
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
6 ! = 6 X 5 X 4 X 3 X 2 X 1
5 ! = 5 X 4 X 3 X 2 X 1
*/

let factorial = 1;
let n = 7;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    
}
console.log(factorial);