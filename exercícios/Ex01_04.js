const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Digite a nota 1"))
let nota2 = Number(prompt("Digite a nota 2"))

let soma = nota1 + nota2
console.log(`A soma entre ${nota1} + ${nota2} é igual: ${soma}`)
let media = soma / 2
console.log(`A média entre ${nota1} / ${nota2} é igual: ${media}`)

