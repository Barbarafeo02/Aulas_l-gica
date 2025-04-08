const prompt = require('prompt-sync')()
let comidas = [];
for(let i=0; i < 6; i++){

let comidas = prompt(`Digite a comida ${i+1} `)
comidas.push(comidas)
//Exiba o primeiro item da lista
console.log(comidas[0])
}

//Exiba o quarto filme
console.log(comidas[3])

//Substitua o filme da última posição e exiba na tela
comidas[3]=`Tomate`
console.log(comidas)
comidas[comidas.Length -1] = `Arroz`
console.log(comidas)

//Insira um novo filme no final da lista e exiba a lista
comidas.push(`Macarrão`)
console.log(comidas)

//spread que adiciona no fim
comidas = [...comidas, `Macarrão`]
console.log(comidas)

//Insira um novo filme na posição 5
comidas[5]=`Farofa`
console.log(comidas)

//Exclua o primeiro filme
comidas.shift()
console.log(comidas)

//Excliua o último filme
comidas.pop()
console.log(comidas)

//Exiba os 3 primeiros itens da lista
console.log(comidas.slice(0,3))
console.log(comidas)

//Exiba os 4 últimos itens da lista
console.log(comidas.slice(-2))

//Colocar a lista em ordem decrescente
comidas.reverse()
console.log(comidas)
