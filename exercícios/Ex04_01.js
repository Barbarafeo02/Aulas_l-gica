const prompt = require('prompt-sync')()
let dia = Number(prompt(`Digite um número de 1 a 7`))
switch (true){
case( dia == `1`):
    console.log( `Domingo` )
    break
    
case( dia == `2`):
    console.log( `Segunda`)
    break

case( dia == `3`):
    console.log(`Terça`)
    break

case( dia == `4`):
        console.log(`Quarta`)
    break

case( dia == `5`):
        console.log(`Quinta`)
    break

case( dia == `6`):
        console.log(`Sexta`)
    break
    default:    
case( dia == `7`):
        console.log(`Sábado`)
}