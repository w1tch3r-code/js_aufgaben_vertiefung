"use strict";

// ===================================================
//       JS-Vertiefung – Conditionals-Level-2_2
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-2_2", "color: tomato");

const output = document.querySelector("#output");
const body = document.body;
const qualityPoints = document.querySelector("#quality-points");
const inputRange = document.querySelector("#air-quality");
const healthConcern = "Level of health concern: ";
const healthEffect = "Level of health effect: ";

function checkAirQuality() {
	qualityPoints.textContent = inputRange.value;

	if (inputRange.value <= 50) {
		body.style.backgroundColor = "#008003";
        output.innerHTML = `<p>${healthConcern} Good</p>
        <p>${healthEffect} Little or no risk</p>`;

	} else if (inputRange.value > 50 && inputRange.value <= 100) {
        body.style.backgroundColor = "#FFF104";
		output.innerHTML = `<p>${healthConcern} Moderate</p>
        <p>${healthEffect} Acceptable quality</p>`;
	} else {
        body.style.backgroundColor = "#F9A206";
		output.innerHTML = `<p>${healthConcern} Unhealthy for sensitive groups</p>
        <p>${healthEffect} Generable publics not likely affectedy</p>`;
    }
}
