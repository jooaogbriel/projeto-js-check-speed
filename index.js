verificarVelocidade(200)

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    if ( velocidade <= velocidadeMaxima )
        console.log('Ok')
    else {
        const pontos = ((velocidade - velocidadeMaxima) / 5)
        if(pontos >= 12)
            console.log("carteira suspensa")
        else
            console.log(`Ponto: ${pontos}`)
    }

}