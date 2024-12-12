const arrFrase = ["La", "vida", "es", "bella", "y", "divertida"];

let delReves = arrFrase.reverse();

const fraseReconstruida = delReves.reduce((acumulado, palabra) => acumulado + " " + palabra);
console.log(fraseReconstruida);

let incluye = delReves.includes('bella');

console.log(incluye);
