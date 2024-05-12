// conteo de palabras

function contarPalabras(array){
    let contadorPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/)
        palabras.forEach(palabra =>{
            if(contadorPalabras[palabra]){
                contadorPalabras[palabra]++;
            }else{
                contadorPalabras[palabra]=1;
            }
        })
    
    });

    return contadorPalabras;
}
let palabrasArray = ["Hola buenos dias", "Hola buenas tardes", "Hola buenas noches"];
let resultado = contarPalabras(palabrasArray);
console.log(resultado);