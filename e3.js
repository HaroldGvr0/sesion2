//array de objeto

let personas = [
    {nombre: "Sergio" , edad:"33" , ciudad:"San Salvador"},
    {nombre: "Martha" , edad:"35" , ciudad:"San Salvador"},
    {nombre: "Marleni" , edad:"50" , ciudad:"Santa Tecla"},
    {nombre: "Sonia" , edad:"25" , ciudad:"San Miguel"},
];

function filtrarPersonaas(personaObjeto, ciudad){
    return personaObjeto.filter(persona => persona.edad > 30 && persona.ciudad === ciudad)
}

let personasFiltradas = filtrarPersonaas(personas, "Santa Tecla");
console.log(personasFiltradas);
