//Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo.
const prompt = require(`prompt-sync`)()
let nr = Number(prompt(`Digite um número`))

if(nr > 0){
    console.log("O número é positivo")

}else{
    console.log("O número é negativo")
}