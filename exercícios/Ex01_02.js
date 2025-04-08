const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um numero?"))

let sucessor = numero + 1
console.log(`O sucessor do ${numero} é igual: ${sucessor}`)
let antecessor = numero - 1
console.log(`O antecessor do ${numero} é igual: ${antecessor}`)
