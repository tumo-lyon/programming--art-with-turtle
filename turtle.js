/// <reference path="./lib/better-turtle.d.ts" />

/**
 *	Effectue une interpolation linéaire entre A et B
 *
 * @param {number} a
 * @param {number} b
 * @param {number} amount
 * @returns
 */
function lerp(a, b, amount) {
  if (a < b) {
    return Math.round(a + (b - a) * amount);
  } else {
    return Math.round(a - (a - b) * amount);
  }
}

/**
 *	Effectue une interpolation linéaire entre deux couleurs
 *
 * @param {[number, number, number]} colFrom
 * @param {[number, number, number]} colTo
 * @param {number} interpol
 * @returns
 */
function colorLerp(colFrom, colTo, interpol) {
  return [
    lerp(colFrom[0], colTo[0], interpol),
    lerp(colFrom[1], colTo[1], interpol),
    lerp(colFrom[2], colTo[2], interpol),
  ];
}

// Les variables en JavaScript: https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_Types#variables
// Les boucles en JavaScript: https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration
// Les fonctions en JavaScript: https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions

// Code below:

setDelay(100);
