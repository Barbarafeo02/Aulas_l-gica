const prompt = require('prompt-sync')()
let idade = Number( prompt(`Digite sua idade`))
if(idade >=18 && idade<=70){
    console.log(`Voto obrigatório`)

}else{
    if(idade < 16){
console.log("Você não pode votar")
    }else{
        if(idade >=16 || idade > 70){
            console.log("Voto facultativo")
        }
    }
}

// Switch Case Estrutura de controle de fluxo para tomar decisões com base no valor de uma variavel
let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))
let op = (prompt("Escolha a operação (+, -, *, /,**" ))
//Test(a o valor da variável se é true
switch(op){
    //Caso a variável op for verdadeiro, testará cada condição
    //caso cada condição seja igual a um dos 'cases' executará o bloco em questão, usamos o break para interromper o processo

    case `+`:
        console.log(`Resultado:${n1 + n2}`)
        break;
    case `-`:
        console.log(`Resultado:${n1 - n2}`)
        break
    case `*`  : 
       console.log(`Resultado:${n1 * n2}`)
        break
    case `**`:
    console.log(`Resultado:${n1 ** n2}`)
        break
    case `/`:
    console.log(`Resultado:${n1 / n2}`)
        break
    default:
        console.log (`Operação inválida}`)
}

let letra = prompt(`Digite uma letra: `). toUpperCase()
//Quando usamos switch (variável), o switch compara exatamente o valor da variável
//com os cases definidos
switch( letra ){
    case "A" :
    case "E" :
    case "I" :
    case "O" :
    case "U" :
        console.log (`Vogal`)
        break
        default:
            console.log (`Consoante`)
}

//Converter a nota em número para letra
let nota = parseInt( prompt ("Digite a nota do aluno:"))
// O switch (true) verifica quais expressões dentro do case retornam true (verdade)
//Ou seja comparamos as expressões boleanas
switch (true){
    case nota >= 90:
        console.log("Nota A")
        break;
    case nota >= 80:
        console.log("Nota B")
        break;
    case nota >= 70:
        console.log ("Nota C")
    case nota > 60:
        console.log ("Nota D")
        break;
    default:
        console.log("Nota E")
}     