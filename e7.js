let personas = [
    {nombre: "Sergio" , edad:"33" , ciudad:"San Salvador"},
    {nombre: "Martha" , edad:"35" , ciudad:"San Salvador"},
    {nombre: "Marleni" , edad:"50" , ciudad:"Santa Tecla"},
    {nombre: "Sonia" , edad:"25" , ciudad:"San Miguel"},
];

function ordenarPorEdad(a,b){
    return a.edad - b.edad
}

personas.sort(ordenarPorEdad);

console.log(personas);