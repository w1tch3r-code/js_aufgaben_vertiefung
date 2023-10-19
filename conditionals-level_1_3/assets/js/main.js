"use strict";

// ===================================================
//      JS-Vertiefung – Conditionals-Level-1_3
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-1_3", "color: tomato");

const output = document.querySelector('#output');

function greaterThan() {
    event.preventDefault();

    if (document.getElementById('input').value >= 18) {
        output.textContent = "Ja, Du kannst Shisha rauchen.";
    } else {
        output.textContent = "Du darfst noch nicht Shisha rauchen.";
    }
}