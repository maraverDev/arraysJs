


// Ejercicio 7: Estadísticas rápidas
// Crea un array de números aleatorios entre 1 y 100 (usa Math.random y un bucle para generarlos).
// Encuentra el número más alto con Math.max y spread operator.
// Encuentra el número más bajo de forma similar.
// Calcula la cantidad de números impares usando filter.



// Crea un array de números aleatorios entre 1 y 100
const numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Randoms " + numerosAleatorios);

// Encuentra el número más alto con Math.max y spread operator
const maximo = Math.max(...numerosAleatorios);
console.log("Maximo " + maximo);

// Encuentra el número más bajo de forma similar
const minimo = Math.min(...numerosAleatorios);
console.log("Minimo " + minimo);

// Calcula la cantidad de números impares usando filter
const numerosImpares = numerosAleatorios.filter(numero => numero % 2 !== 0);
console.log("Impares " + numerosImpares);
console.log("Cantidad impares " + numerosImpares.length);


// Randoms 13,48,62,40,52,36,63,95,99,88
// Maximo 99
// Minimo 13
// Impares  [ 13, 63, 95, 99 ]
// Cantidad impares  4