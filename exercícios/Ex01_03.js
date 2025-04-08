const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um numero'))
let dobro = numero * 2
console.log(`A multiplicação entre ${numero} * ${2} é igual: ${dobro}`)

let triplo = numero * 3
console.log(`A multiplicação entre ${numero} * ${3} é igual: ${triplo}`)

let elevadoaocubo = numero ** 3
console.log(`A exponenciação entre ${numero} ** ${3} é igua: ${elevadoaocubo}`)
