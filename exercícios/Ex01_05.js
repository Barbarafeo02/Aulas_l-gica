const prompt = require('prompt-sync')();
let metros = Number(prompt("Digite um numero em metros?"))

let coverCm = metros * 100
let milimetros = metros * 1000
let KM = metros / 1000
console.log(`A conversão de ${metros} para cm é ${coverCm}, para milímetros é ${milimetros} e para km é igual a ${KM} `)

