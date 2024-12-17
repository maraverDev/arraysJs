const arrFrase = ["La", "vida", "es", "bella", "y", "divertida"];

let delReves = arrFrase.reverse();

const fraseReconstruida = delReves.reduce((acumulado, palabra) => acumulado + " " + palabra);
console.log(fraseReconstruida);
// divertida y bella es vida La

let incluye = delReves.includes('casa');

console.log(incluye);
// false
