function generarListaLegible(listaDeCompras) {
    let listaLegible = "Lista de compras:\n";
    
    for (let item in listaDeCompras) {
        listaLegible += `${item}: ${listaDeCompras[item]}\n`;
    }
    
    return listaLegible;
}

let listaDeCompras = {
    "Manzanas": 5,
    "Plátanos": 3,
    "Leche": 2,
    "Pan": 1
};

let listaLegibleParaUsuario = generarListaLegible(listaDeCompras);
console.log(listaLegibleParaUsuario);
