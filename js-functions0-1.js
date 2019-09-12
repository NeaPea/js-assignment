// Assignment JS.Funcs.0

// Add VAT
'use strict';
function addVat(a) { 
    return a * 1.25;                            // const vat = 25; - const addVat = function(a) { return a * (1 + vat / 100);} 
}
let amount = Number(prompt('Write amount of price you want to include VAT:'));
amount = addVat(amount);
console.log(amount);

// Sub VAT                                      // const vat = 25; - const subVat = function(a) { return a / (1 + vat / 100);} 
'use strict';
function subVat(b) { 
    return b * 0.80; 
}
let subAmount = Number(prompt('Write an amount to see what is it without VAT:'));
subAmount = subVat(subAmount);
console.log(subAmount);

// Calculate VAT                                // const vat = 25; - const addVat = function(a) { return a - a / (1 + vat / 100);} 
'use strict';
function calcVat(c) { 
    return c * 0.2;
}
let calcAmount = Number(prompt('Calculate your amount with VAT:'));
calcAmount = calcVat(calcAmount);
console.log(calcAmount);


// Assignment Assignment JS.Funcs.1

// First letter
'use strict';
function firstLetter(d) { 
    return d.charAt(0);
}
let word = prompt('Write a word, and see what the first letter is:');
word = firstLetter(word);
console.log(word);



// Middle letter
'use strict';
function middleLetter(e){ 
    return e.substr(1, e.length - 2);
}
let middleWord = prompt('Write a name to see what the middle letter is:')
middleWord = middleLetter(middleWord);
console.log(middleWord);



// Last letter
'use strict';
function lastLetter(f){ 
    return f.charAt(f.length - 1);
}
let anotherWord = prompt('Write a word, to see the last letter:');
anotherWord = lastLetter(anotherWord);
console.log(anotherWord);


// Assignment Assignment JS.Funcs.2

'use strict';

function play(an) {
    let out = Math.random();
    out = Math.floor(out * an + 1);
    return out;

}

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let roll;

roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);



roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);



roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);


roll = play(6); 
if (roll === 1)
    one++;
else if (roll === 2)
    two++;
else  if (roll === 3)
    three++;
else if (roll === 4)
    four++;
else if (roll === 5)
    five++;
else (roll === 6)
    six++;


console.log(roll);
