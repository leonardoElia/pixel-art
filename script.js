//Fazendo as 25 divs

const divs = document.querySelectorAll('#pixel-board div'); // o lenght é 5
for(let contadora =0; contadora < divs.length; contadora +=1){
    for(let cont=1; cont<=5; cont +=1){
    let quadrado = document.createElement('div');
    quadrado.className = 'pixel';
    quadrado.style.backgroundColor = 'white';
    divs[contadora].appendChild(quadrado)
}


} 

//Fazendo a cor preta ficar seleciionada
const corPreta = document.getElementsByClassName('color')[0];
corPreta.classList.add('selected');

//Recuperando todas as cores
const corRosa = document.getElementsByClassName('color')[1];
const corAzul = document.getElementsByClassName('color')[2];
const corVermelho = document.getElementsByClassName('color')[3];

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


const divPaiPixels = document.getElementById('pixel-board');
function pintar(event){
}

divPaiPixels.addEventListener('click', pintar)