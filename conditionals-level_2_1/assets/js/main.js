"use strict";

// ===================================================
//       JS-Vertiefung – Conditionals-Level-2_2
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-2_2", "color: tomato");

const johnHeight = 170;
const johnAge = 22;
const meikeHeight = 168;
const meikeAge = 34;

console.log('john score: ' + (johnAge * 5 + johnHeight));
console.log('meike score: ' + (meikeAge * 5 + meikeHeight));

const calcJohn = johnAge * 5 + johnHeight;
const calcMeike = meikeAge * 5 + meikeHeight;

if (calcJohn > calcMeike) {
    console.log(`John gewinnt das Spiel mit ${calcJohn} Punkten!`);
} else if (calcMeike > calcJohn) {
    console.log(`Meike gewinnt das Spiel mit ${calcMeike} Punkten!`);
} else {
    console.log(`Das Spiel ist unentschieden!`);
}
