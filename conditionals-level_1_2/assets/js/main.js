"use strict";

// ===================================================
//      JS-Vertiefung – Conditionals-Level-1_2
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-1_2", "color: tomato");

function weather() {
    const output = document.querySelector('#output');
    const input = document.querySelector('#zahl');
    let zahl = input.value;

    if (zahl >= 8) {
        output.textContent = 'Das wetter ist super';
    } else if (zahl >= 6 && zahl <= 7) {
        output.textContent = 'Das wetter ist gut';
    } else if (zahl >= 3 && zahl <= 5) {
        output.textContent = 'Das wetter ist okay';
    } else {
        output.textContent = 'Das wetter ist schlecht';
    }
}