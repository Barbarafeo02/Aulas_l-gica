//Variáveis locais e globais
function nomeEscola(){
escola = "SESI"
console.log(escola);
//declarando uma variável local
var cidade = `Andradina`
}
nomeEscola()
//essa variável é global, pois ela pode ser acessada em qualquer parte do código
var escola = `Senai`
console.log(escola)
nomeEscola()
var cidade = `Mirandópolis`
console.log(cidade)

var x = 10 //variável global
console.log(`Fora da função`, x)
function minhaFuncao(){
  let x = 0; //variável local
  x = x + 1
  console.log(`Dentro da função`, x)
}

minhaFuncao()

console.log("Fora da funcao de novo", x)

 ////////////////////////////////////////////

var x = 10 //variável global
console.log(`Fora da função`, x)

function minhaFuncao(){
  //Estramos usando a variável global
  x = x + 1
  console.log(`Dentro da função`, x)
}

minhaFuncao()
x += 1
console.log("Fora da funcao de novo", x)