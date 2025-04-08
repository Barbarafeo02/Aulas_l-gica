const prompt = require('prompt-sync')()
const velocidade = parseFloat(prompt("Digite a velocidade do carro (km/h):")); 

  

if (velocidade > 80) { 

  const excesso = velocidade - 80; 

  const multa = excesso * 7; 

  console.log(`Multado! Valor da multa: R$ ${multa.toFixed(2)}`); 

} else { 

  console.log("Velocidade dentro do limite permitido."); 

} 