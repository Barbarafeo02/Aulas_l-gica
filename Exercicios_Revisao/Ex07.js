// Faça um Programa que pergunte quanto você ganha por hora e o número de horas 
//trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que 
//são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça 
//um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o 
//salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo: 
//+ Salário Bruto: R$ - IR (11%): R$ - INSS (8%): R$ - Sindicato (5%): R$ = Salário Liquido: R$ 
//Obs.: Salário Bruto - Descontos = Salário Líquido.

const prompt = require(`prompt-sync`)()
let horas_por_dia = Number(prompt("Digite as horas trabalhadas por dia"))
let custo_hora = Number(prompt("Digite quanto você ganha por hora"))
let salario = horas_por_dia * custo_hora
console.log(`O seu salário é ${salario}`)

let salarioBruto =  horas_por_dia + custo_hora
let impostoRenda = salarioBruto - (salarioBruto * 0.11)
let INSS = (salarioBruto * 0.08)
let sindicato = salarioBruto * 0.05
let descontos = impostoRenda + INSS + sindicato
let salarioLiquido = salarioBruto - descontos
console.log(`O salalário bruto equivale a: R$ ${salarioBruto}`)
console.log(`O imposto de renda  equivale a: R$ ${impostoRenda}`)
console.log(`O INSS equivale a: R$ ${INSS}`)
console.log(`O salário líquido equivale a: R$ ${salarioLiquido}`)