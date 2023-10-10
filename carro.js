//codigo do carro

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 260, 315];
let comprimentoCarro = 50;
let alturaCarro = 40;
//CARRO 1
// VELOCIDADE CARRO 1
let velocidadeCarro1 = 2.5

//CARRO 2
// VELOCIDADE CARRO 2
let velocidadeCarro2 = 5

// CARRO 3
// VELOCIDADE CARRO 3
let velocidadeCarro3 = 3.2

// CARRO 4
// VELOCIDADE CARRO 4
let velocidadeCarro4 = 4.5

// CARRO 5
// VELOCIDADE CARRO 5
let velocidadeCarro5 = 5.0

// CARRO 6
// VELOCIDADE CARRO 6
let velocidadeCarro6 = 3.5

    //mostra carro
  function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

  function movimentaCarro(){
    xCarros[0] -= velocidadeCarro1
    xCarros[1] -= velocidadeCarro2
    xCarros[2] -= velocidadeCarro3
    xCarros[3] -= velocidadeCarro4
    xCarros[4] -= velocidadeCarro5
    xCarros[5] -= velocidadeCarro6
  }

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
  
  
  
}