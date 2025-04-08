const prompt = require('prompt-sync')()
nmr1 = Number(prompt(`Digite um número`))
nmr2 = Number(prompt(`Digite um número`))

if(nmr1 > nmr2){
    console.log(`O numero ${nmr1} é maior que ${nmr2}`)
}else{
    console.log(`O numero ${nmr1} é menor que ${nmr2}`)
}
