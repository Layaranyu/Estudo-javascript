console.log("Trabalhando com Condicionais");

const listaDeDestino = new Array( 
    `Salvador` ,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador= 18;
const estaAcompanhada= false;
const temPassagemComprada=true


console.log("Destinos Possiveis");
console.log(listaDeDestino);

//if(idadeComprador >= 18 ){
    //console.log("Comprador maior de idade")

    //listaDeDestino.splice(1,1);
//}else if(estaAcompanhada){
   // console.log("Comprador esta acompanhado")

    //listaDeDestino.splice(1,1);}
//else{
   // console.log("Não é maior de idade e não posso vender")
//}


if(idadeComprador >= 18 || estaAcompanhada ==true) {
    console.log("Boa Viagem")
    listaDeDestino.splice(2, 1);
    
}else{
    console.log("Não é maior de idade e não posso vender")
}


console.log("Embarque: \n \n")
if(idadeComprador>=18 && temPassagemComprada){
    console.log ("Boa viagem!");
}else{ 
    console.log("Você não pode embarcar")
}
console.log(listaDeDestino)