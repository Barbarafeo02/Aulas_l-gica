const prompt = require('prompt-sync')()
let carros = "Gol,Corsa,Palio,Monza,Fusca"
let Lista = carros.split(",")
for(let carro of Lista){
    console.log(carro)
}