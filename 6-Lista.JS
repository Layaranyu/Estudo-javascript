console.log("Trabalhando com lista");

// const salvador= `Salvador`;
// const sãoPaulo= `São Paulo`;
// const rioDeJaneiro= `Rio de Janeiro`;

const listaDeDestino = new Array( 
    `Salvador` ,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestino.push(`Curitiba`);
console.log("Destinos Possiveis");
console.log(listaDeDestino);

listaDeDestino.splice(1,1);
console.log(listaDeDestino);

console.log(listaDeDestino[1])