const prompt = require('prompt-sync')()

let reais = Number(prompt("Digite quanto de dinheiro você tem na carteira?"))
let cotacao = Number( prompt("Digite a cotação do dolar" ))

let dolares = reais / cotacao

console.log(`Com R$${reais} na minha carteira que equivale á : $${dolares.toFixed(2)} `)
