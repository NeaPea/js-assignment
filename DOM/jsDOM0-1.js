// jsDOM 0 
'use strict';
function play(an) {

    let out = Math.random();
    out = Math.floor(out * an + 1);
    return out;

}

let dieSides = [0, 0, 0, 0, 0, 0]; // Start die, before rolled. Empty array. 
let roll;


roll = play(6);  // Here we can change the different outcomes, but remember to add to the if statement if there is more or less outcomes, and of course change the array!

switch (roll) {
    case 1:
        dieSides[0]++;
        break;
    case 2:
        dieSides[1]++; 
        break;
    case 3:
        dieSides[2]++;
        break;
   
    case 4:
        dieSides[3]++;
        break;
    case 5:
        dieSides[4]++;
        break;
    default:
        dieSides[5]++;
}

console.log(roll);


// The code runs as it did even if I had default in the middle. 


