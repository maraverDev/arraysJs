
// Ejercicio 1: Manipulación básica de arrays
// Crea un array con los números del 1 al 10.
// Usa el método map para crear un nuevo array que contenga los cuadrados de los números originales.
// Filtra el array original para obtener solo los números pares.
// Usa reduce para calcular la suma de todos los números del array.

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const map = oneToTen.map((i) => i * i);
console.log(map);
//   [
//     1,  4,  9, 16,  25,
//     36, 49, 64, 81, 100
//   ]

let parNums = [];
oneToTen.forEach((x) => {
  if (x % 2 === 0) {
    parNums.push(x);
  }
});
console.log(parNums);
// [ 2, 4, 6, 8, 10 ]

const reduce = oneToTen.reduce((x, i) => x + i, 0);
console.log(reduce);
// 55