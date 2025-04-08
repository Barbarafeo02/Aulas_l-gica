const prompt = require('prompt-sync')()
const salario = Number(prompt("Digite o valor do salário:")); 

let aumento

if (salario <= 2000) { 
aumento = salario * 0.12; 
console.log( aumento)

}else if(salario >2000 && salario <4000)
{
aumento = salario * 0.10; 
console.log(aumento)

}

else{
    

    console.log("==>")

}
    

