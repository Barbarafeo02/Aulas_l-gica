const prompt = require('prompt-sync')()
const gasolina = Number(prompt("Digite o valor da gasolina em litros")); 
const alcool=  Number(prompt("Digite o valor do álcool em litros")); 

if (alcool < (gasolina * 0.7) )
    {console.log(`Abasteça com álcool`)}
else{
    console.log(`Abasteça com gasolina`)}

