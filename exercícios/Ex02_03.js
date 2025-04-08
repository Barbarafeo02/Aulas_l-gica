const prompt = require('prompt-sync')()
nmrInteiro = Number(prompt(`Digite um número inteiro`))
let valor = nmrInteiro % 2
if (nmrInteiro == 0){
    console.log(`O ${nmrInteiro} vai ser par`)
}else{
    console.log(`O ${nmrInteiro} vai ser Ímpar`)
}
