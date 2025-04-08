const prompt = require('prompt-sync')()

    let nmr1, nmr2, nmr3, nmr4, nmr5, nmr6
    for (let contador=0; contador< 6; contador++ ){
        let nrSorteado = Math.floor(Math.random() * 60) + 1
        let nmrJ = false
        if( contador > 0 && nrSorteado == nmr1) nmrJ= true
        if( contador > 1 && nrSorteado == nmr2) nmrJ= true
        if( contador > 2 && nrSorteado == nmr3) nmrJ= true
        if( contador > 3 && nrSorteado == nmr4) nmrJ= true
        if( contador > 4 && nrSorteado == nmr5) nmrJ= true

        if (!nmrJ) {
            if (contador == 0) nmr1 = nrSorteado
            if (contador == 1) nmr2 = nrSorteado
            if (contador == 2) nmr3 = nrSorteado
            if (contador == 3) nmr4 = nrSorteado
            if (contador == 4) nmr5 = nrSorteado
            if (contador == 5) nmr6 = nrSorteado
            } else {
                contador--

            }
        }
        console.log(`Os números sorteados são: ${nmr1}, ${nmr2}, ${nmr3}, ${nmr4},${nmr5}, ${nmr6}`) 
    



    
