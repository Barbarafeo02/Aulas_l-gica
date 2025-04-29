//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um 
//algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:  
//Para homens: (72.7 * altura) – 58   Para mulheres: (62.1 * altura) - 44.7, exiba qual é o peso ideal da pessoa.
const prompt = require(`prompt-sync`)()
let sexo = (prompt(`Digite seu sexo`))
let altura = Number(prompt(`Digite sua altura`))


if (sexo == "Masculino"){
    let pesoIdeal = 72.7 * altura -58
    console.log( `Seu peso ideal é${pesoIdeal}`)
} else if (sexo == "Feminino"){
    let pesoIdeal2 = 62.1 * altura - 44.7
    console.log(`Peso ideal é ${pesoIdeal2}`)

}else {
    console.log(`Peso inválido `)
}