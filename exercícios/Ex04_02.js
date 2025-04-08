const prompt = require('prompt-sync')()

const ano = (prompt("Digite o ano de nascimento:")); 
const anoAtual = (prompt("Digite o ano atual"))
const idade = anoAtual - ano; 

switch (true){
    
case idade <= 10 :
console.log(`A pessoa é uma criança`)
     break

case idade >= 11 && idade <= 17:
  console.log(`A pessoa é um adolescente`)
     break

case idade >= 18 && idade <= 59:
  console.log(`A pessoa é uma adulta`)
    break

case idade >= 60 :
  console.log(`A pessoa é uma idosa`)
    break
  default:
    console.log(`A idade é inválida`)
  }