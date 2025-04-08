const prompt = require('prompt-sync')()
const vendas = parseFloat(prompt("Digite o valor das vendas do vendedor:")); 

let comissao; 

  

if (vendas > 5000) { 

  comissao = vendas * 0.05; // 5% de comissão 

} else { 

  comissao = vendas * 0.03; // 3% de comissão 

} 
console.log(`Valor da comissão: R$ ${comissao.toFixed(2)}`); 
  