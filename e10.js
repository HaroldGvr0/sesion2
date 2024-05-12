let estudiantes = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 22 },
    { nombre: 'Pedro', edad: 21 }
];

let profesores = [
    { nombre: 'Ana', especialidad: 'Matemáticas' },
    { nombre: 'Luis', especialidad: 'Historia' }
];

let comunidadEducativa = estudiantes.concat(profesores);

console.log(comunidadEducativa);
