const prompt = require('prompt-sync')()
let salario = Number(prompt("Digite o valor do salário:")); 

switch(true){

    case salario > 2000:
    salario= salario + (salario * 0.12)
    console.log(`Salário reajustando: ${salario}`)
    break

    case salario >=2000 && salario <= 4000:
    salario = salario * 0.10
    salario= salario + (salario * 0.10)
    console.log(`Salário reajustando: ${salario}`)
    break
    
    case salario > 4000:
    salario = salario + (salario * 0.8)
    console.log( `Salário reajustando: ${salario})`)
    break
    default:
     console.log( `Operação inválida`)
}
