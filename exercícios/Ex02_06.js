const prompt = require('prompt-sync')()
const num1 = parseInt(prompt("Digite o primeiro número inteiro:")); 

const num2 = parseInt(prompt("Digite o segundo número inteiro:")); 



if (num1 === num2) { 

  console.log("Números iguais"); 

} else { 

  console.log("Números diferentes"); 

} 