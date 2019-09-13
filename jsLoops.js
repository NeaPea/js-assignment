// JS.0 - Factorial number

'use strict';

function fact(x) {
    if (x === 0) { // If x is 0, return 1.
        return 1;
    }
    return x * fact(x - 1);
}
let input = Number(prompt('Enter a number:'));
console.log(fact(input));


// JS.1 - Fibonacci number

'use strict';

function fib(n) {
     if (n === 0 || n === 1) {
         return n;
     }
     console.log(n);
     return fib(n-1) + fib(n-2);
}

let inputFibbi = Number(prompt('Enter a number:'));
console.log(fib(inputFibbi));

// JS.2.2 - Prime numbers

// 1
'use strict';
function isPrime(p) {
    if (p % 2 === 0){
        return false;
    } else {
        p % 2 !== 0
        return true;
    }
}
let pNum = Number(prompt('Enter a number to see if it is a prime:'));
console.log(isPrime(pNum));

// 2
// 3
// 4


// JS.3 - Mathematical powers

function pow(r, e) {
    if ( e <= 0 ){

    return r;
    }
    return r * pow(r, e - 1);
}
let a = Number(prompt('Enter number 1:'));
let b = Number(prompt('Enter number 2:'));
console.log(pow(a,b));

// JS.71

// 1 
// 2 
// 3