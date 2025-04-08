const prompt = require('prompt-sync')()

nota1 = Number(prompt(`Digite a nota`))
nota2 = Number(prompt(`Digite a nota`))

let media = (nota1 + nota2) / 2
console.log(`A média entre ${nota1 + nota2} / ${2} é igual: ${media}`)

if(media >= 7){
    console.log(`Aprovado`)
}else if( media >=5 && media <=7)
    console.log(`Recuperação`)
    else{
        console.log(`Reprovado`)}