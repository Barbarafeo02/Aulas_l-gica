const prompt = require('prompt-sync')()

let preco = Number(prompt(`Digite o preco do produto`))

let precoComDesconto = preco - preco * 5 / 100
console.log(`Preço sem desconto ${preco.toFixed(2)}`)
console.log(`Preço com desconto ${precoComDesconto.toFixed(2)}`)