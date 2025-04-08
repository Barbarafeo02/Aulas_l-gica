const prompt = require(`prompt-sync`)()
let altura = Number(prompt(`Digite sua altura`))
let peso = Number(prompt(`Digite seu peso`))
let imc = peso / (altura ** 2)
if (imc < 18.5){
    console.log( `Abaixo do peso ideal`)
} else if ( imc >= 18.5 && imc < 25){
    console.log(`Peso ideal`)

}else if (imc >= 25 && imc < 30){
    //           p        q            p e q 
    console.log( `Sobrepeso`)
}else {
    console.log(`Obesidade`)
}

//Verificar se o triângulo é equilátero ou escaleno
//Receber lado 1
let lado1 = Number(prompt(`Digite o valor do lado 1`))
let lado2 = Number(prompt(`Digite o valor do lado 2`))
let lado3 = Number(prompt(`Digite o valor do lado 3`))
//verficar se o triângulo é equillátero caso tenha todos os lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log(`Triângulo equilátero ?`, eq, `Triângulo Escaleno`, es)

//Praticando
let ladoa = Number(prompt(`Digite o valor do lado a`))
let ladob = Number(prompt(`Digite o valor do lado b`))
let ladoc = Number(prompt(`Digite o valor do lado c`))
let equi = (ladoa == ladob) && (ladob == ladoc)
let esca = (ladoa != ladob) && (ladob != ladoc) && (lado1 != lado3)

console.log(`Triângulo equilátero ?`, equi, `Triângulo Escaleno`, esca)

if((ladoa == ladob) && (ladob == ladoc)){
    console.log(`Triângulo Equilátero`)

}else if((ladoa != ladob) && (ladob != ladoc && ladoa != ladoc)){
    console.log(`Triângulo escaleno`)
}else {
    console.log( `Triângulo isósceles`)
}
    
//Descobrir a quantidade de horas trabalhadas
let horas = Number( prompt(`Total de horas trabalhadas:`))
let vendas = Number( prompt(`Total de vendas`))
//Validar se uma das condições foi atendida (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if(vendas > 5000 || horas > 40){
    console.log( `Tem direito ao bônus`)
}
else {
    console.log(`Não tem direito ao bônus`)
}

//Crie um algoritmo que receba um caractere e verfique se ele é uma vogal ou uma consoante
let caractere = Number( prompt(`Digite o caractere:`))
if( caractere == `a`|| caractere ==`e` ||  caractere == `i` || caractere == `o` || caractere ==`u`){
    console.log( `Vogais`)
}
else{
    console.log( `Consoantes`)
}
