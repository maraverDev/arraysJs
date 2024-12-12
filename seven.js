


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
console.log("Números aleatorios:", numerosAleatorios);

// Encuentra el número más alto con Math.max y spread operator
const maximo = Math.max(...numerosAleatorios);
console.log("Número más alto:", maximo);

// Encuentra el número más bajo de forma similar
const minimo = Math.min(...numerosAleatorios);
console.log("Número más bajo:", minimo);

// Calcula la cantidad de números impares usando filter
const numerosImpares = numerosAleatorios.filter(numero => numero % 2 !== 0);
console.log("Números impares:", numerosImpares);
console.log("Cantidad de números impares:", numerosImpares.length);