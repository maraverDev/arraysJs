
// Define un array de objetos que representen estudiantes, con las propiedades nombre, edad y nota:
// const arrEstudiantes = [
//     { nombre: "Ana", edad: 20, nota: 8 },
//     { nombre: "Luis", edad: 22, nota: 5 },
//     { nombre: "María", edad: 19, nota: 7 },
//     { nombre: "Carlos", edad: 21, nota: 4 }
// ];
// Usa filter para obtener los estudiantes aprobados (nota mayor o igual a 5).
// Ordena a los estudiantes por edad con sort.
// Usa map para crear un array que solo contenga los nombres de los estudiantes.
// Calcula la nota promedio de los estudiantes con reduce.



const arrEstudiantes = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 22, nota: 5 },
    { nombre: "María", edad: 19, nota: 7 },
    { nombre: "Carlos", edad: 21, nota: 4 }
];

const ordenarNota = arrEstudiantes.filter((t) => t.nota >= 5);
console.log(ordenarNota);

//   { nombre: 'Ana', edad: 20, nota: 8 },
//   { nombre: 'Luis', edad: 22, nota: 5 },
//   { nombre: 'María', edad: 19, nota: 7 

const ordenarEdad = arrEstudiantes.sort((a,b) => a.edad - b.edad);
console.log(ordenarEdad);
// { nombre: 'María', edad: 19, nota: 7 },
// { nombre: 'Ana', edad: 20, nota: 8 },
// { nombre: 'Carlos', edad: 21, nota: 4 },
// { nombre: 'Luis', edad: 22, nota: 5 }

const reduce = arrEstudiantes.reduce((a,b) => (a+b.nota), 0)/arrEstudiantes.length;
console.log(reduce);
