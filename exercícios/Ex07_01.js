const prompt = require('prompt-sync')()
let filmes = [`Meu Malvado Favorito`, `Barbie: Escola De Princesas`, `Minions` , `A Bela Adormecida`, `Moana`, `Cinderela`, `A Branca de Neve`]
console.log(filmes)
//Exiba o primeiro item da lista
console.log(filmes[0])

//Exiba o quarto filme
console.log(filmes[3])

//Substitua o filme da última posição e exiba na tela
filmes[3]=`A Branca de Neve`
console.log(filmes)
filmes[filmes.Length -1] = `Pequena Sereia`
console.log(filmes)

//Insira um novo filme no final da lista e exiba a lista
filmes.push(`Frozen`)
console.log(filmes)

//spread que adiciona no fim
filmes = [...filmes, `Frozen`]
console.log(filmes)

//Insira um novo filme na posição 5
filmes[5]=`Enrolados`
console.log(filmes)

//Exclua o primeiro filme
filmes.shift()
console.log(filmes)

//Excliua o último filme
filmes.pop()
console.log(filmes)

//Exiba os 3 primeiros itens da lista
console.log(filmes.slice(0,3))
console.log(filmes)

//Exiba os 4 últimos itens da lista
console.log(filmes.slice(-2))

//Colocar a lista em ordem decrescente
filmes.reverse()
console.log(filmes)
