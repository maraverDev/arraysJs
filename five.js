
// Ejercicio 5: Operaciones con matrices
// Crea dos arrays de números enteros de igual longitud.
// Usa map para crear un nuevo array que contenga la suma de los elementos correspondientes de ambos arrays.
// Multiplica los elementos de un array por su índice usando map.
// Encuentra el índice del primer número mayor a 10 en uno de los arrays usando findIndex.


const numX = [1, 2, 3, 4, 6];
const numY = [1, 2, 3, 4, 6];

let sumaArrays = numX.map((elemento, indice) => elemento + numY[indice]);

console.log(sumaArrays)


let multIndice = numX.map((elemento, indice) => elemento * indice);
console.log(multIndice);

let first = numX.findIndex(num => num > 5)
console.log(first)
