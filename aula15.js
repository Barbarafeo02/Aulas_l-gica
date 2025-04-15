const prompt = require(`prompt-sync`)()
function Cabecalho(texto){
    console.log(`---------------------------------------------`)
    console.log(texto)                     
    console.log(`---------------------------------------------`)
}
//Criando outra função, função de saudação
function Saudacao(){
    let nome = prompt(`Digite seu nome`)
    console.log(`${nome} tenha um bom dia!`)
}
//Chamando a função 
//Passando o parametro junto com a função
Cabecalho (`SESI/SENAI`)
//Posso declarar uma variável e passa-lá como parametro para função
let escola = `SESI 025`
Cabecalho (escola)
Saudacao()
//criei a função soma que ira receber dois valores como o parametro a partir desses valores, realizara o calculo e mostrara o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
Soma(5,6)
Soma(8,9)

//exercícios
//1
function ParImpar(n1){
    let resultado = n1 % 2
    if (resultado == 0){
        console.log(`O ${n1} é par `)
    }else(console.log(`O número ${n1} é ímpar`))
    }
ParImpar(12)
ParImpar(6)

//2
//função com retorno do resultado
//o cálculo é realizado e é retornada para a chamada de função
function media (n1, n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}
console.log(media(6,8))
//armazenei o retorno da função em uma variável
let valor = media(9,7)
//utilizei o retorno da função para escrever na tela
console.log(valor)
//utilizei a variável que recebeu o retorno da função para
//chamar \ função par ou impar passando o valor como parametro
ParImpar(valor)