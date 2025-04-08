const prompt = require('prompt-sync')()
const anoNascimento = parseInt(prompt("Digite o ano de nascimento:")); 

const anoAtual = new Date().getFullYear(); 

const idade = anoAtual - anoNascimento; 

  

if (idade >= 18) { 

  console.log("Maior de idade"); 

} else { 

  console.log("Menor de idade"); 

} 