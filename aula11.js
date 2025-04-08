const prompt = require('prompt-sync')()
//Trabalhando com laços de repetição (while)
//Executar o laço x vezes
let contador= 1
//irá repetir enquanto a condição for verdadeira
//ou seja será verdade enquanto o contador for menor ou igual a 5
while (contador <=5){
    console.log(`O contador é ${contador}`)
    //incrementando a variável, ou seja, adicionando valor a ela
    //para que continue o processo até que a condição seja atingida
    contador = contador + 1
}
    console.log("Fim")

let senha_senai = `12345`
while(true){
    let senha = prompt(`Digite a senha`)
    if (senha_senai == senha){
        console.log(`Você hackeou a senha`)
    break
    }else if ( senha == `desisto`){

    }
}

//Atividade
let soma = 0
let qtd = 0

while(true){
    let valor= Number( prompt (`Digite o valor do produto para encerrar:`))
    if (valor == 0){
        break
    }
    else{
        soma = soma + valor
        qtd++
    }
}
console.log(`Foram informados ${qtd}`)
//ToFixed serve para colocar somente dois dígitos após a vírgula
console.log(`Valor total dos produtos ${soma.toFixed(2)}`)

//Resolução 2
let soma2 = 0
let qtd2 = 0
let encerrar = ""
while(encerrar != "SUB-TOTAL"){
    let valor= Number( prompt (`Digite o valor do produto:`))
        soma2 = soma2 + valor
        qtd2++ 
        encerrar = prompt(`Deseja continuar: (digite SUB-TOTAL)`)
    }

console.log(`Foram informados ${qtd2}`)
//ToFixed serve para colocar somente dois dígitos após a vírgula
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`)

//Atividade: jogo de adivinhação de números
console.log("##############################")
console.log("🧐 JOGO DA ADVINHAÇÃO 🧐 ")
console.log("##############################")
let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um nmr aleatório
console.log(nrSorteado)
let acertou = false
while(!acertou){
    const chute = parseInt(prompt(`Digite um número entre 1 e 100 para advinhar🩷`))
    if (chute > nrSorteado)
        {console.log(`Você chutou ${chute} tente um número menor`)}
    else if (chute < nrSorteado)
        {console.log(`Você chutou ${chute} tente um número maior`)}
        else if (chute == nrSorteado){
            {console.log(`Você chutou ${chute}, Parabéns você acertou!`)}
            acertou= true}
        }
        console.log("FIM")
        
    








