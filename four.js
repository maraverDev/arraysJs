
//Crea un array con una lista de palabras (puedes inventarlas).
// Usa filter para encontrar las palabras que tienen más de 5 letras.
// Invierte las letras de cada palabra utilizando map y split/reverse/join.
// Ordena las palabras por longitud usando una función personalizada en sort.


const array = ["Gonzalo", "Pepe", "Pene", "Pito", "Cuadro"];
let arrayHecho = array.filter((a) => a.length >= 5);
console.log (arrayHecho);
// [ 'Gonzalo', 'Cuadro' ]

// Invierte las letras de cada palabra utilizando map y split/reverse/join.

let invertido = array.map(palabra => palabra.split('').reverse('').join(''));
console.log(invertido);
// [ 'olaznoG', 'epeP', 'eneP', 'otiP', 'ordauC' ] 

// Ordena las palabras por longitud usando una función personalizada en sort.

function ordenarPalabras(array) {
    array.sort((a,b) => b.length - a.length);
    return array;
}

console.log(ordenarPalabras(array));
// [ 'Gonzalo', 'Cuadro', 'Pepe', 'Pene', 'Pito' ]




