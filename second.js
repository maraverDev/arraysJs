const ciudades = ["Ciudad Real", "Zaragoza", "Cadiz", "Barcelona", "Almeria"];

const map = ciudades.map((x) => x.toUpperCase());
console.log(map);
// [ 'CIUDAD REAL', 'ZARAGOZA', 'CADIZ', 'BARCELONA', 'ALMERIA' ]
const alfa = ciudades.sort();
console.log(alfa);
// [ 'Almeria', 'Barcelona', 'Cadiz', 'Ciudad Real', 'Zaragoza' ]

const cM = ciudades.some((t) => t.startsWith("M"));

console.log(cM);
// false

const every = ciudades.every((t) => t.length > 4);
console.log(every);
// true