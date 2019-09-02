// Opgave js15.js 
'use strict';

let fahr = Number(prompt("Indtast tal i Fahrenheit:"));
console.log(fahr);

let c = 5/9 * (fahr-32);
console.log(c);


// Opgave js201.js
'use strict';

let leapYear = Number(prompt("Write in todays year, to see if it is a leap year:"));

console.log(leapYear%4===0);


// Opgave js202.js
'use strict';
let gender = Number(prompt("Enter your CPR number: female for true, male for false"));
console.log(gender%3==1);


// Opgave js25c.js
'use strict';
console.log('Truth table for conjunction.');
console.log('var1\tvar2\tvar1 && var2');
var var1 = true;
var var2 = false;
console.log((!var2) + '\t' + (var1) + '\t' + (var1 && !var2)); // T T T
console.log((var1) + '\t' + (var2) + '\t' + (var1 && var2)); //  T F F
console.log((!var1) + '\t' + (var1) + '\t' + (!var1 && var2)); // F T F
console.log((!var1) + '\t' + (var2) + '\t' + (!var1 && !var2)); // F F F


// Opgave js25d.js

'use strict';
console.log('Truth table for disjunction.');
console.log('var1\tvar2\tvar1 || var2');
var var1 = true;
var var2 = false;
console.log((var1) + '\t' + (var1) + '\t' + (var1 || var2)); // T T T
console.log((var1) + '\t' + (var2) + '\t' + (var1 || var2)); // T F T
console.log((!var1) + '\t' + (var1) + '\t' + (var1 || var2)); // F T T
console.log((var2) + '\t' + (var2) + '\t' + (!var1 || var2)); // F F F

// Opgave js25c3.js
'use strict';
console.log('Truth table for conjunction.');
console.log('var1\tvar2\tvar1 && var2 && var3');
var var1 = true;
var var2 = false;
var var3 = true;
console.log((!var2) + '\t' + (var1) + '\t' + (var3) + '\t' + (var1 && !var2 && var3)); // T T T T
console.log((var1) + '\t' + (var2) + '\t' + (!var3) + '\t' + (var1 && var2 && !var3)); //  T F F F
console.log((!var1) + '\t' + (var1) + '\t' + (!var3) + '\t' + (!var1 && var2 && var3)); // F T F F
console.log((!var1) + '\t' + (var2) + '\t' + (!var3) + '\t' +  (!var1 && !var2 && var3)); // F F F F
console.log((var2) + '\t' + (var1) + '\t' + (var3) + '\t' +  (!var1 && !var2 && var3)); // F T T F
console.log((var2) + '\t' + (!var1) + '\t' + (var3) + '\t' +  (!var1 && !var2 && var3)); // F F T F
console.log((var1) + '\t' + (!var2) + '\t' + (!var3) + '\t' +  (!var1 && !var2 && var3)); // T T F F
console.log((var1) + '\t' + (var2) + '\t' + (var3) + '\t' +  (!var1 && !var2 && var3)); // T F T F

//Opgave js25d3.js
'use strict';
console.log('Truth table for disjunction.');
console.log('var1\tvar2\tvar3\tvar1 || var2 || var3');
var var1 = true;
var var2 = false;
var var3 = true;

console.log((var1) + '\t' + (!var2) + '\t' + (var3) + '\t' + (var1 || !var2 || var3)); // T T T T
console.log((var1) + '\t' + (var2) + '\t' + (var3) + '\t' + (var1 || var2 || var3)); // T F T T
console.log((var2) + '\t' + (var1) + '\t' + (var3) + '\t' + (var1 || var2 || var3)); // F T T T
console.log((var2) + '\t' + (!var1) + '\t' + (!var3) + '\t' + (!var1 || var2 ||!var3)); // F F F F
console.log((var2) + '\t' + (!var1) + '\t' + (var3) + '\t' + (!var1 || var2 || var3)); //F F T T 
console.log((var2) + '\t' + (var1) + '\t' + (!var3) + '\t' + (var1 || var2 || !var3)); // F T F T
console.log((var1) + '\t' + (var2) + '\t' + (!var3) + '\t' + (var1 || var2 || !var3)); // T F F T 
console.log((var1) + '\t' + (var3) + '\t' + (var2) + '\t' + (var1 || var2 || var3)); // T T F T 



// Nu laver jeg en comment så jeg kan få en git status :)