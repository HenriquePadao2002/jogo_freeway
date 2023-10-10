    //adicionar as imagens do jogo
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoAtor;
let ImagemDaEstrada;
//sons do jogo
let somDaTrilha;
let somDoPonto;
let somDaColisao;

  function preload() {
      imagemDoCarro1 = loadImage("imagens/carro-1.png");
      imagemDoCarro2 = loadImage("imagens/carro-2.png");
      imagemDoCarro3 = loadImage("imagens/carro-3.png");
      imagemDoCarro4 = loadImage("imagens/carro-1.png");
      imagemDoCarro5 = loadImage("imagens/carro-2.png");
     imagemDoCarro6 = loadImage("imagens/carro-3.png");
      imagemDoAtor = loadImage("imagens/ator-1.png");
      ImagemDaEstrada = loadImage("imagens/estrada.png");
      imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3,imagemDoCarro4,imagemDoCarro5,       imagemDoCarro6];
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
    somDaColisao = loadSound("sons/colidiu.mp3");
  
}