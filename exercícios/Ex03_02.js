
const prompt = require('prompt-sync')()

const ano = (prompt("Digite o ano de nascimento:")); 
const anoAtual = (prompt("Digite o ano atual"))
const idade = anoAtual - ano; 

if(idade <= 10 ){console.log(`A pessoa é uma criança`)

}else if( idade >10 && idade <=17)
  {console.log(`A pessoa é um adolescente`)}

else if( idade >18 && idade <=59)

  else{
    console.log(`A pessoa é uma idosa`)}


