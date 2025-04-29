//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas 
//trabalhadas no mês.Calcule em uma nova variável e mostre o total do seu salário no referido 
//mês.
const prompt = require(`prompt-sync`)()
let horas_por_dia = Number(prompt("Digite as horas trabalhadas por dia"))
let custo_hora = Number(prompt("Digite quanto você ganha por hora"))
let salario = horas_por_dia * custo_hora

console.log(salario)