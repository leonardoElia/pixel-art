//Fazendo as 25 divs

const divs = document.querySelectorAll('#pixel-board div'); // o lenght é 5
for(let contadora =0; contadora < divs.length; contadora +=1){
    for(let cont=1; cont<=5; cont +=1){
    let quadrado = document.createElement('div');
    quadrado.classList.add('pixel');
    quadrado.classList.add('corPixel');
    divs[contadora].appendChild(quadrado)
}


} 

//Fazendo a cor preta ficar seleciionada
const corPreta = document.getElementsByClassName('color')[0];
corPreta.classList.add('selected');

//Fazendo apenas um cor ficar com a classe selected
let paletaDecores = document.getElementById('color-palette');
function seleciona(event){       
let cores = document.getElementsByClassName('color');
for(let index =0; index < cores.length; index +=1){
    let corAtual = cores[index];
    
    if(corAtual.classList.contains('selected')){
        corAtual.classList.remove('selected');
    }

    if(paletaDecores.classList.contains('selected')){
        paletaDecores.classList.remove('selected');
    }else{
        event.target.classList.add('selected');
    }
}
}


paletaDecores.addEventListener('click', seleciona);

//Fazendo pintar
const pixels = document.getElementsByClassName('pixel');

function pintar(event){
    console.log('teste');
    let todasCores = document.getElementsByClassName('color');
    
    for(let cont=0; cont < todasCores.length; cont +=1){
      
    let corAtual = todasCores[cont];
      if(corAtual.classList.contains('selected')){

     if(event.target.classList.contains('preto')|| event.target.classList.contains('rosa') || event.target.classList.contains('azul') || event.target.classList.contains('vermelho') ){

     }else{
        let corSelcionada = corAtual.classList.item(1);
        event.target.classList.add(corSelcionada);
        event.target.classList.remove('corPixel');
     }
  
    }

      }
    }




for(let conta =0; conta < pixels.length; conta +=1){


pixels[conta].addEventListener('click', pintar);

}

