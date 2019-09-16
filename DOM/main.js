'use strict';
var placesToVisit = ["New York", "Oklahoma", "Texas", "Hawaii", "New Mexico"];
placesToVisit.push("Jackson");
document.write('<p> Places I want to visit in the US : </p>');

document.write('<br>' + '<b>' + 'YOUR CHOSEN DESTIONATION:' + '</b>');
function chooseDest(theArray) {
   var arr = Number(prompt("Enter a number between 0-5, go to the destination shown:"));
   if (arr => 0 ) {
       document.write('<b>' + '<p>' + placesToVisit[arr] + '</p>' + '</b>' );
   }
}
chooseDest(placesToVisit);


document.write('<br>' + '<b>' + 'D I S P L A Y -- A R R A Y' + '</b>');
function outputArray(theArray) {
    for (let i = 0; i < placesToVisit.length; i++) {
    document.write('<p>' + placesToVisit[i] + '</p>');
  }  
}
outputArray(placesToVisit);




document.write('<br>' + '<b>' + 'S P L I C E' + '</b>');
placesToVisit.splice(0, 2);
outputArray(placesToVisit);

document.write('<br>' + '<b>' + 'S O R T' + '</b>');
placesToVisit.sort();
outputArray(placesToVisit);



