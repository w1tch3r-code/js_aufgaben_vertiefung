"use strict";

// ===================================================
//     JS-Einführung – logical-Operators-Level-1_10
// ===================================================

console.log("%c JS-Einführung – logical-Operators-Level-1_10", "color: tomato");


let x = 10;
let y = 15;
let z = 20;

let a = true;
let b = false;

console.log(x > z && x > y); // false
console.log(x !== y); // true
console.log(z < y || z > x); // true
console.log(x === z || x !== y); // true
console.log(x >= 10 && y <= 10); // false
console.log(x * z < 100 || x * y > 100); // true


console.log(a && b); // false
console.log(a || b); // true
console.log(!(a && b)); // true

