const prompt = require('prompt-sync')()
let num = 1;
let par = 0
let impar = 0
let qtdPar = 0
let qtdImpar = 0
while (num != 0 ){
    let num = Number(prompt(`Digite um número`))
 if (num % 2 == 0)
 {
    console.log(`Os números pares  são ${nmr}`)
    par = par + num
    qtdPar++

 }
   
else if (num % 2 != 0)
    {
       console.log(`Os números ímpares  são ${nmr}`)
       impar = impar + num
       qtdImpar++
    }
      nmr=Number (prompt(`Deseja continuar?(0 para encerrar)`))

   
   }
