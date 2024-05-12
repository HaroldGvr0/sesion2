function validarPropiedades(objeto, propiedadesRequeridas) {
    for (let propiedad of propiedadesRequeridas) {
        if (!objeto.hasOwnProperty(propiedad)) {
            return false;
        }
    }
    return true;
}

let persona = {
    nombre: 'Juan',
    direccion: 'Calle 123',
    telefono: '555-1234'
};

let propiedadesRequeridas = ['nombre', 'direccion', 'telefono'];

if (validarPropiedades(persona, propiedadesRequeridas)) {
    console.log('El objeto tiene todas las propiedade.');
} else {
    console.log('El objeto no tiene todas las propiedades.');
}
