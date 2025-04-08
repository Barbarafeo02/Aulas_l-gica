const prompt = require('prompt-sync')()
let início = Number(prompt(`Digite o valor do início`))
let fim = Number(prompt(`Digite o valor do fim`))
let passo = Number(prompt(`Digite o valor do passo`))

for(início; início < fim; início += passo){
    console.log(`Valor inicial: ${início}`)
    console.log(`Valor inicial: ${fim}`)
    console.log(`Valor inicial: ${passo}`)
    console.log(`=========================`)
}
