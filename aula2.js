//Importando a biblioteca para a entrada de dados
const prompt = require('prompt-sync')();


//Variaveis e constantes 
// Passo 1: receber o nome da pessoa
let nome = "Ayrton";
// Passo 2: receber a idade da pessoa
let idade = 36;
// Passo 3: receber o peso da pessoa
let peso = 76.5
//Passo 4: exibir o nome, a idade e o peso;
console.log(nome, idade, peso)
console.log( 'nome', 'idade', 'peso' );

//REceber e armazena o texto em uma variavel
let curso = "Desenvolvimento de Sistemas"
// #tipo  nome  recebe  valor     na variavel 

//Exibir o valor armazenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso", curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 35//valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "Lyuz"

console.log("Olá", nome2, "você tem:", idade2, "e hoje está fazendo", temperatura, "°C")

//Usando template string
console.log(`Olá ${nome2} você tem ${idade2} e hoje esta fazendo: ${temperatura}°C`)

let chovendo = false
let dia = true
// as constantes não podem ser reatribuidas novos valores
const PI = 3.1415
console.log(PI)

// Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt(' Qual é seu nome?');
idade = parseInt(prompt("Qual é a sua idade:"));
peso = parseFloat(prompt( 'Qual seu peso? '))

console.log(`Seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)
//valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso)

