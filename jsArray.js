// jsArray1.js 
'use strict';
function play(an) {

    let out = Math.random();
    out = Math.floor(out * an + 1);
    return out;

}

let dieSides = [0, 0, 0, 0, 0, 0]; // Start die, before rolled. Empty array. 
let roll;


roll = play(6);  // Here we can change the different outcomes, but remember to add to the if statement if there is more or less outcomes, and of course change the array!


if (roll === 1)
    dieSides[0]++;
else if (roll === 2)
    dieSides[1]++;
else  if (roll === 3)
    dieSides[2]++;
else if (roll === 4)
    dieSides[3]++;
else if (roll === 5)
    dieSides[4]++;
else 
    dieSides[5]++;
    

console.log(roll); // Will display what number we rolled in the console. And will also add the value to the array


// jsArray2.js

'use strict';

let txt = prompt("Enter a word to see if it is a palidrome:");


let isPalindrome = function isPalindrome(str){  // This function will check if the first, middle and last letters are alike or as we say palindromic.
    if (str.length <=1 ) { // Return true if the word is a palindrome. 
         return true;
         }
    return first(str) === last(str) && isPalindrome(middle(str));  
    }
 
function first(b){   
    return b.charAt(0);
}
function middle(c) {
    return c.substring(1, c.length -1);
}
function last(f){ 
    return f.charAt(f.length - 1);
}

console.log(isPalindrome(txt)); 






// jsArray3.js -> To see if a number is "N".


'use strict';
function play(an) {
    let out = Math.random();
    out = Math.floor(out * an + 1);
    return out;
}
            //  1  2  3  4  5  6 
let dieSides = [0, 0, 0, 0, 0, 0]; // Start die, before rolled. Empty array. 
let roll;

roll = play(6);  // Here we can change the different outcomes, but remember to add to the if statement if there is more or less outcomes, and of course change the array!
dieSides[roll - 1]++; // Simplified version than the if else statement....
console.log(roll);
let num = Number(prompt("Enter a number to see if it is an n:"));

function anyN (n) {  // This is to see if we rolled any "n's"(specific number)
    return dieSides[n - 1] > 0;
}
anyN(num); 

console.log(roll); // Will display what number we rolled in the console. And will also add the value to the array
console.log(anyN);







// 2 sided die, to see if each roll are the same.

'use strict';
function play(an) {
    let out = Math.random();
    out = Math.floor(out * an + 1);
    return out;
}
            //  1  2   
let dieSides = [0, 0]; // Start die, before rolled. Empty array. 
let roll;

roll = play(2);  // Here I decided to have a "2" sided die.. Or a coin if you wish.
dieSides[roll - 1]++;
console.log(roll);

roll = play(2);  
dieSides[roll - 1]++; 


const everyLol = function (item){
    return item != 2;

    }
    console.log(!dieSides.every(everyLol)); 

console.log(roll); 
console.log(dieSides);