const prompt = require('prompt-sync')()
const temperatura = (prompt("Digite a temperatura em graus celsius")); 
if(temperatura <= 15 ){console.log(`A temperatura é fria`)
} else if( temperatura >15 && temperatura <=25)
    {console.log(`A temperatura é agradável`)}
else if ( temperatura >25 && temperatura <=35)
    {console.log(`A temperatura é quente`)}
else{
    console.log(`A temperatura é muito quente`)}