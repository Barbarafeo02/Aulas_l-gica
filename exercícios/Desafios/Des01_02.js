const prompt = require('prompt-sync')()
const horas = (prompt("Digite a hora atual")); 
if(horas <= 5 && horas <=11 ) {console.log(`Bom dia!`)}
else if( horas >=12 && horas <=17)
    {console.log(`Boa tarde!`)}
else if ( horas >=18 && horas <=23)
    {console.log(`Boa noite!`)}
else{
    console.log(`Boa madrugada!`)}