"use strict";

// ===================================================
//       JS-Vertiefung – Conditionals-Level-2_3
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-2_3", "color: tomato");

function diff(x) {

    const zahl = 27;

    if (x > zahl) {
        console.log(Math.abs(x - zahl) * 2);
    } else {
        console.log(`Die eingegebene Zahl: ${x} ist kleiner als 27!`);
    }

}

diff(35);
diff(74);
diff(123);
diff(25);

// ===================================================
//       JS-Vertiefung – Conditionals-Level-2_4
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-2_4", "color: tomato");

function sumMulti(a, b) {

    if (a === b) {
        console.log(`(${a} + ${b}) * 5 =  ${(a + b) * 5}`);
    } else {
        console.log(`Die eingegebenen Zahlen: ${a} und ${b} sind nicht gleich!`);
    }

}

sumMulti(5, 5);
sumMulti(6, 4);
sumMulti(7, 7);