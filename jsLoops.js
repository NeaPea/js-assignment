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
    return fib(n - 1) + fib(n - 2);
}

let inputFibbi = Number(prompt('Enter a number:'));
console.log(fib(inputFibbi));





// JS.2.2 - Prime numbers

// 1
'use strict';
function isPrime(p) {
    if (p % 2 === 0) {
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
    if (e <= 0) {
        return r;
    }
    return r * pow(r, e - 1);
}
let a = Number(prompt('Enter number 1:'));
let b = Number(prompt('Enter number 2:'));
console.log(pow(a, b));





// JS.71

'use strict';
/* Downey: thinkjava, ex 71 */
const loop = function (n) {
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
const sqRoot = function (k) {
    var prevG = k / 2; //X0  
    var sqR = 0; //X1
    while (true) {
        sqR = (prevG + k / prevG) / 2;
        if (Math.abs(prevG - sqR) < 0.0001) {
            return sqR;
        }
        prevG = sqR;

    }
}
console.log(sqRoot(9));


// JS.73
'use strict';
const powR = function (r, e) {
    let g = 1;
    while (e > 0) {
        g *= r;
        e -= 1;
    }
    return res;
}
let c = Number(prompt('Enter number 1:'));
let f = Number(prompt('Enter number 2:'));
console.log(powR(c, f));


// JS.74

const facto = function (y) {
    let res = 1;
    while (y > 0) {
        res *= y;
        n -= 1;
    }
    return res;
}

// JS.75


'use strict';
// What are we playing? Coin: 2, Die: 6 etc...
function roll(an) {
    let out = Math.random();
    out = Math.floor(out * an); // Before we had out = Math.floor(out * an***** + 1****); to increment the array we made in the earlier version. Now we don't need that since we have an array that we can choose how many outcomes it has. 
    return out;
}
// Function to call when rolling, x times and y many outcomes.
const timesPlayed = function (times2Roll, nrOutcomes) {
    let res;      // We declare res(result)
    let outComes = []; // We create the array, that can take any number of possible outcomes.

    let possibleOutcome = 0; // First possible outcome we want is 0, because it's a start of an array.
    for (possibleOutcome = 0; possibleOutcome < nrOutcomes; possibleOutcome++) {    // Initiate the array with 0 for each outcome. First roll, and then 2nd and so on, for each possible outcome.
        outComes[possibleOutcome] = 0; // If nrOutcomes has the value of 6, it will add 6 outcomes. and add it to the array.

    }
    let timesRolled = 0;
    while (timesRolled < times2Roll) {        // Keep rolling until you've reached your final roll.
        res = roll(nrOutcomes); // We do a roll, and we pass in the number of possible outcomes(e.g if we have 6 outcomes we roll through [0-5])
        outComes[res]++; // Add the result into the array
        timesRolled++; // Increment by 1, cause we have rolled. -> continue until no rolls left (e.g we entered 5 roles, it will loop 5 times.)
    } 
    return outComes;  // When everything has looped and been called it will return the result.
}
timesPlayed(10, 2);
