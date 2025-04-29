//Faça um algoritmo que em uma função receba 4 notas bimestrais e mostre a média 
//e se o aluno passou de ano ou está de recuperação considerando média acima de 7 
//aprovado, entre 5 e 7 em recuperação e abaixo de 5 reprovado. 
const prompt = require('prompt-sync')()
nota1 = Number(prompt(`Digite a nota`))
nota2 = Number(prompt(`Digite a nota`))
nota3 = Number(prompt(`Digite a nota`))
nota4 = Number(prompt(`Digite a nota`))

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`A média entre ${nota1} + ${nota2} +${nota3} + ${nota4} / ${2} é igual: ${media}`)

if(media >= 7){
    console.log(`Aprovado`)
}else{
    console.log(`Reprovado`)
}