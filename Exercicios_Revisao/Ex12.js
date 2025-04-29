// Faça um algoritmo que leia 5 números inteiros e armazene-os num vetor. Armazene 
//os números pares no vetor PARES e os números ímpares no vetor IMPARES. Exiba o conteúdo 
//dos 2 vetores.
let listaNumeros = [`1`, `2`, `3`, `4`, `5`]
let par=[]
let impar=[]

for(let i = 0; i <= listaNumeros.length; i++){
    if(listaNumeros[i] % 2 == 0){
        par.push(listaNumeros[i])
    }else{
        impar.push(listaNumeros[i])
    }
}
console.log(par)
console.log(impar)
