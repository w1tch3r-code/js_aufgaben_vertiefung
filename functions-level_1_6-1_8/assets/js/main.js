"use strict";

// ===================================================
//     JS-Vertiefung – Functions-Return-Level-1_6
// ===================================================

console.log("%c JS-Vertiefung – Functions-Return-Level-1_6", "color: tomato");

let x = 1;
let y = returnOne();

function returnOne() {
    return 1
}

if (x === y) {
    console.log("Wird das gedruckt?");
}

// ===================================================
//     JS-Vertiefung – Functions-Level-1_7
// ===================================================

console.log("%c JS-Vertiefung – Functions-Level-1_7", "color: tomato");

function multi(x) {
    return x * 2;
}

console.log(multi(8));

// ===================================================
//     JS-Vertiefung – Functions-Level-1_8
// ===================================================

console.log("%c JS-Vertiefung – Functions-Level-1_8", "color: tomato");

function calcAge(yearBorn) {
    const datum = new Date();
    const jahr = datum.getFullYear();

    return jahr - yearBorn;
}

console.log(calcAge(1972));


function ageDiff(ageOne, ageTwo) {
    let alterDiff = Math.abs(ageOne - ageTwo);

    return alterDiff
}

console.log(ageDiff(50,86));
