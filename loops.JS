console.log(" \nTrabalhando com Condicionais");

const listaDeDestino = new Array( 
    `Salvador` ,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador= 15;
const estaAcompanhada= false;
let temPassagemComprada= false;
const destino = "salvador"

console.log(" \n Destinos Possiveis");
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste= false;

while (contador < 3){
    if (listaDeDestino[contador]== destino){
        destinoExiste= true;
        break;
}
    contador+=1;
    
}

console.log("Destino Existe:", destinoExiste);

if( podeComprar && destinoExiste){
    console.log("Boa Viagem")
} else{
    console.log("Desculpe, tivemos um erro ")
}

for(let cont =0; contador < 3 ; cont++ ){
    if (listaDeDestino[contador]==destino){
    destinoExiste= true;

}
}