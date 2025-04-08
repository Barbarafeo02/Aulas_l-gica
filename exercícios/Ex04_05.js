
const prompt = require('prompt-sync')()

nota1 = Number(prompt(`Digite a nota`))
nota2 = Number(prompt(`Digite a nota`))

let media = (nota1 + nota2) / 2
console.log(`A média entre ${nota1 + nota2} / ${2} é igual: ${media}`)

switch (true){

case media > 7:
    console.log(`Aprovado`)
    break

case media > 5 && media <=7:
    console.log(`Recuperação`)
    break
case media < 5:
    console.log(`Reprovado`)
    break

    default:
    console.log(`Valor inválido`)}
