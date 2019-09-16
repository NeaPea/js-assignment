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

'use strict';
/* Downey: thinkjava, ex 71 */
const loop = function(n) {
    let i = n;
    while (i > 1) {
        console.log(i);
        if (i % 2 == 0) {
            i = i / 2;
        } else {
            i = i + 1;
        }
    }
}
loop(10);


/* The output with loop(10); is = 10, 5, 6, 3, 4, 2.
Because the variable i becomes 10, and then we move on to the next line of code where it divides 10(i) with 2 
and if that works, it will show the number 5. Next we have 10 + 1 which will print 6. And it will continue to do so until 
there is no more numbers to calculate since on line 83 it says ( if i is more than 1 we can go to the next line of code). */



    // JS.72     // x1 = (x0 + a/x0)/2
'use strict';
    const sqRoot = function(k) {
        var prevG = k / 2; //X0  
        var sqR = 0; //X1
        while (true) {
            sqR = (prevG + k / prevG )/2;
            if (Math.abs(prevG - sqR) < 0.0001) {
                    return sqR;
            } 
            prevG = sqR;

        } 
    }
    console.log(sqRoot(9));


    // JS.73
    'use strict';
    const powR = function(r, e) {
        let g = 1;
        while (e > 0) {
            g *= r;
            e -= 1;
        }
        return res;
    }
    let c = Number(prompt('Enter number 1:'));
    let f = Number(prompt('Enter number 2:'));
    console.log(powR(c,f));


    // JS.74

    const facto = function(y) {
        let res = 1;
        while(y > 0) {
            res *= y;
            n -= 1; 
        }
        return res;
    }

// JS.75