//Fazendo as 25 divs
const divPaiPixels = document.getElementById('pixel-board');
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