//Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra 
// escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido.
const prompt = require(`prompt-sync`)()
let sexo = String(prompt("Digite a letra F ou a letra M para definir o sexo"))
if(sexo == `M`){
    console.log(`Masculino`)}
    else if ( sexo == `F`){
    console.log(`Feminino`)
    }
    else{
    console.log(`Sexo inválido`)
    }

    
    

