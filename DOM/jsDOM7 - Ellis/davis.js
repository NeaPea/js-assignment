'use strict';
/*
 * davis.js
 */
let empty = function (target) {
    let foo = target;
    // Removing all children from an element
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
}


let fillLeft = function (target) {
    let art = target;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}

let fillCenter = function (cTarget) {
    let arty = cTarget;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("And I disappear after you click me once! So don't click me!"); // create text
    $('center').style.color = "yellow";
    par.appendChild(txt); // put onto tree

    arty.appendChild(img);
    arty.appendChild(h1);
    arty.appendChild(par);
}



let fillRight = function (rTarget) {
    let right = rTarget;

    let img = document.createElement('img'); // Create img element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let Title = document.createElement('h1'); // Create an h1 tag
    let text = document.createTextNode('Never');
    Title.appendChild(text); // Put on tree, text in the h1 one.

    let para = document.createElement('p'); // Create paragraph
    text = document.createTextNode('Never, ever ever ever!');
    para.appendChild(text);

    right.appendChild(img);
    right.appendChild(Title);
    right.appendChild(para);

}

let t1 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'left': fillLeft(elm); break;
        }
    }
}

let t2 = function (ev2) {
    let target = ev2.target || ev2.srcElement;
    let kid = target.id;
    // alert(id);
    let elm = $(kid);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (kid) {
            case 'center': fillCenter(elm); break;
        }
    }
}



let t3 = function (event) {
    let rTarget = event.rTarget || event.srcElement;
    let rid = rTarget.id;

    let element = $(rid);
    if (rTarget.innerHTML !== '') {
        empty(element);
    } else {
        switch (rid) {
            case 'right': fillRight(element); break;
        }
    }
}

let initialize = function () {
    let left = $('left');
    let right = $('right');
    let center = $('center');
    fillRight(right);
    fillLeft(left);
    fillCenter(center);
    left.addEventListener('click', t1, false);
    center.addEventListener('click', t2, false);
    right.addEventListener('click', t3, false);
}

window.addEventListener('load', initialize);