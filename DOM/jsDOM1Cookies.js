"use strict";

var $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}




const myfunc = function() {     // This function creates the cookie
    let inP = $('name').value;
    let date = $('dat').value;

    if (inP.length < 2 || date.length < 2) {  // IF name and date input is not filled, alert user
        alert('enter a valid name and date')
    } else {
        createCookie(inP + date , 42, 0.006); // inP= "username" date = "date" 42 = "potential score", 0.006 = 10 min. 
        console.log(document.cookie);
    }


}

let init = function () {
    $('b1').addEventListener('click', myfunc);
}

window.addEventListener('load', init);
