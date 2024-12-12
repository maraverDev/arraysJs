Ejemplos

1. map
Transforma cada elemento del array según una función dada.

const arrNumeros = [1, 2, 3];
const cuadrados = numeros.map(num => num ** 2); // [1, 4, 9]
2. filter
Crea un nuevo array con los elementos que cumplen una condición.

const arrNumeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0); // [2, 4]
3. reduce
Reduce el array a un único valor aplicando una función acumulativa.

const arrNumeros = [1, 2, 3, 4];
const suma = numeros.reduce((acum, num) => acum + num, 0); // 10
4. some
Comprueba si al menos un elemento del array cumple una condición.

const arrNumeros = [1, 2, 3];
const hayMayorQueDos = numeros.some(num => num > 2); // true
5. every
Comprueba si todos los elementos del array cumplen una condición.

const arrNumeros = [2, 4, 6];
const todosPares = numeros.every(num => num % 2 === 0); // true
6. sort
Ordena los elementos del array (por defecto, como strings).

const arrPalabras = ["manzana", "banana", "cereza"];
palabras.sort(); // ["banana", "cereza", "manzana"]
 
// Para números, se necesita una función de comparación:
const arrNumeros = [10, 5, 20];
numeros.sort((a, b) => a - b); // [5, 10, 20]
7. find
Devuelve el primer elemento que cumple una condición.

const arrNumeros = [1, 2, 3, 4];
const mayorQueDos = numeros.find(num => num > 2); // 3
8. findIndex
Devuelve el índice del primer elemento que cumple una condición.

const arrNumeros = [1, 2, 3, 4];
const indice = numeros.findIndex(num => num > 2); // 2
9. reverse
Invierte el orden de los elementos del array.

const arrNumeros = [1, 2, 3];
numeros.reverse(); // [3, 2, 1]
10. includes
Comprueba si el array contiene un elemento específico.

const arrPalabras = ["hola", "mundo"];
const contieneMundo = palabras.includes("mundo"); // true
11. split y join
Convierte strings a arrays (split) o arrays a strings (join).

const strFrase = "Hola mundo";
const arrPalabras = frase.split(" "); // ["Hola", "mundo"]
const fraseUnida = palabras.join("-"); // "Hola-mundo"
12. spread operator
Descompone un array en sus elementos.

const arrNumeros = [1, 2, 3];
const maximo = Math.max(...numeros); // 3