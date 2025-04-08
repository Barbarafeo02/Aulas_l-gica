const prompt = require('prompt-sync')()
for (let i = 0; i < 100; i++){
    console.log(i)
}

//Entregando os notebooks por ordem
console.log("entregando notebooks")

for(let nr = 1; nr<= 32; nr++ ){
    let nome = prompt(`Quem é o numero ${nr}`)
    let presente = prompt(`O(A) ${nome} veio para a escola (S ou N)`)

    if(presente == `S`){
        console.log(`Pegar notebook ${nr}`)
        console.log(`Pegar mouse ${nr}`)
        console.log(`Pegar nfonte ${nr}`)
        console.log(`Levar notebook até ${nr}`)
    }
    else{
        console.log(`Não pegar notebook${nr}`)
    }
}
