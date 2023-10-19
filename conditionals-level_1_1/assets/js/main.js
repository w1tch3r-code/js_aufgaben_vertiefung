"use strict";

// ===================================================
//     JS-Vertiefung – Conditionals-Level-1_1
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-1_1", "color: tomato");


const output = document.querySelector('#output');

function adult() {
    const input = document.querySelector('#age');
    // console.log(input);

    const alter = Number(input.value);
    // console.log(alter);

    if (alter >= 18) {
        output.textContent = "Volljährig";
    } else {
        output.textContent = "Minderjährig";
    }
}
