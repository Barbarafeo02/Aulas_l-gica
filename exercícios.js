const prompt = require(`prompt-sync`)()

console.log("exercício aula de lógica")
console.log("Bem-vindo ao curso de JavaScript")
console.log( "Estou aprendendo a usar console.log")

console.log( 15 + 25 )//soma
console.log( 100 - 45 )//subtração
console.log(  12 * 7 )//multiplicação
console.log( 144 / 12 )
console.log ( 20 % 3 )
console.log( 2 ** 5 )

//Exercicios de entradade de dados e variaveis

//01-Criar 4 variaveis nomeAluno, altura, escola, ano
let nomeAluno = "Barbara"
let altura = 1.60
let escola = "Sesi"
let ano = 'segundo ano do Medio' 
//Exibir os valores das variaveis
console.log(nomeAluno, altura, escola, ano )

//02-Crie 3 variaveis e a atribua valores
let nomeProfessor = "EdCarlos"
let materia = "Matematica"
let anoIngresso = 2020
//Exibir valores das variaveis
console.log(`O professor ${nomeProfessor} que leciona a materia ${materia} entrou no ano de ${anoIngresso} `);

//03-Reatribuindo valores as nossas variaveis
nomeAluno = prompt(`Digite o nome do aluno`)
altura = parseFloat(prompt(`Digite a altura`))
escola = prompt(`Digite o nome da escola`)
ano = parseInt(prompt( `Digite o número da turma`))
console.log(`A aluna ${nomeAluno} tem ${altura}, estuuda na escola ${escola} no ano ${ano}`)

nomeProfessor = prompt(`Digite o nome do professor: `)
materia = prompt(`Digite o nome da matéria: `)
anoIngresso = parseInt(prompt(`Digite o ano de ingresso`))
console.log(`O professor ${nomeProfessor} que leciona a materia ${materia} entrou no ano de ${anoIngresso} `);