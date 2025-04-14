let frutas = [ `Maça`, `Banana`, `Uva`, `Abacaxi`]
//A variável x serve para iterar os valores até o limite da lista
//O nome não é obrigatoriamente ser o nome i, x ou contador
//pode ser qualquer nome de variável
for(let x = 0; x < frutas.length; x++){
    //O length identifica o tamanho total da lista
    console.log(`A fruta  é ${frutas[x]}`)
}
let listaNomes = [`Bill Gates`, `Rafinha`, `Raul Seixas`, `Esteves`, `Vieira`]
//para cada nome da lista nomes escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}
//lista de vogais
const prompt = require('prompt-sync')()
let vogais= [`a`, `e`, `i`, `o`, `u`]
let consoantes =[ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "w", "z"]
let  letra = prompt(`Digite uma letra:`)
//se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log(`É uma vogal`)
}
else if(consoantes.includes(letra.toLowerCase())){
    console.log(`É uma consonte`)
}
else{
    console.log(`Não é uma letra`)
}
//Obtendo a posição do item
for(let [pos, fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`Posição ${pos} e fruta ${fruta}`)
}

//separando os itens em uma lista
let produtos = `Celular, Notebook, TV, Tablet, Headset`
let listaProdutos = produtos.split(`,`)
//O split divide a string e forma uma lista a partir do limita no caso abaixo de uma vírgula
for(let produto of listaProdutos){
    console.log(produto)
}
//Percorrendo uma string como uma lista(lista de caracteres)
let palavra = `SENAI`
for(letra of palavra){
    console.log(letra)
}
