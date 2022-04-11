let cartasArray;
let arrayTeste;
let parrotCard;
let parrotCardFront;
let parrotCardBack;
let cartasViradas = [];
let compararGif;
let cartas = document.querySelectorAll(".parrot-card");
let gifsArray = ["./images/bobrossparrot.gif",
"./images/bobrossparrot.gif",
"./images/explodyparrot.gif",
"./images/explodyparrot.gif",
"./images/fiestaparrot.gif",
"./images/fiestaparrot.gif",
"./images/metalparrot.gif",
"./images/metalparrot.gif",
"./images/revertitparrot.gif",
"./images/revertitparrot.gif",
"./images/tripletsparrot.gif",
"./images/tripletsparrot.gif",
"./images/unicornparrot.gif",
"./images/unicornparrot.gif"
];
let rodadas = [];
let viradas = document.querySelectorAll(".virada");
let perguntaCartas;
let timer = 0;
let temporizadorVar;

pickCards(); // Prompt Qtde Cartas + Random das cartas + contador


function virarCarta(carta) {
        
        cartasArray = document.querySelectorAll(".virar-carta-back"); //todas as cartas que foram viradas

        arrayTeste = Array.from(cartasArray);
        let parrotCardFront = carta.children[0]; //div parte frontal da carta
        let parrotCardBack = carta.children[1]; //div parte traseira da carta


        
        if (cartasViradas.length < 2 && cartasViradas[0] !== carta && carta.classList.contains("certas") === false) {
        rodadas.push(carta);
        parrotCardBack.classList.add("virar-carta-back");//Efeito de virar a carta e mostrar a parte traseira
        parrotCardFront.classList.add("virar-carta-front");
         cartasViradas.push(carta);// PUSH para aumentar tamanho do length para só permitir virar até 2 cartas por vez
        }
        
        if (cartasViradas.length === 2) {
            compararCartas();
        }
    
}

function compararCartas() {
    
    cartasArray = document.querySelectorAll(".virar-carta-back");
    cartaFront = document.querySelectorAll(".virar-carta-front");
    arrayTeste = Array.from(cartasArray);

    if (arrayTeste[0].querySelector("img").attributes.src.value === arrayTeste[1].querySelector("img").attributes.src.value) {

        setTimeout(esperarCartaIgual, 500);
    } 
    else if (arrayTeste[0].querySelector("img").attributes.src.value !== arrayTeste[1].querySelector("img").attributes.src.value) {
        setTimeout(esperarCartaDiferente, 1000);
    }
    cartasViradas = [];  
}
function esperarCartaDiferente() {
        cartasArray = document.querySelectorAll(".virar-carta-back");
        cartaFront = document.querySelectorAll(".virar-carta-front");
        arrayTeste = Array.from(cartasArray);
        
        for (let i = 0; i < 2; i++) {
        cartasArray[i].classList.remove("virar-carta-back");
        cartaFront[i].classList.remove("virar-carta-front");  
    }
    arrayTeste.pop();
    arrayTeste.pop();
}
function esperarCartaIgual() {
    for (let i = 0; i < 2; i++) {
        cartasArray[i].classList.add("carta-igual");
        cartasArray[i].classList.remove("virar-carta-back");
        cartasArray[i].classList.remove("face");
        cartasArray[i].parentNode.classList.remove("virada");
        cartasArray[i].parentNode.classList.add("certas");
    }
    arrayTeste.pop();
    arrayTeste.pop();
    setTimeout(gameOver, 150)
}

function pickCards() {
    let lista = document.querySelector(".parrot-cards");
    perguntaCartas = 0;
    perguntaCartas = prompt("Quantas cartas quer jogar? (permitido apenas 4 - 14)");
    console.log(perguntaCartas);
    let gifs = document.querySelector(".parrot-card-back img");
    arrayTeste = [];
    
    

    if (perguntaCartas % 2 == 0 && perguntaCartas >= 4 && perguntaCartas <= 14) {
        temporizadorVar = setInterval(temporizador, 1000);
        for (let i = 0; i < perguntaCartas; i++) {
            let templateArray = `<div class="parrot-card virada" onclick="virarCarta(this)">
        <div class="parrot-card-front face"><img src="./images/front.png"></div>
        <div class="parrot-card-back face"><img src="${gifsArray[i]}"></div>
</div>`
            arrayTeste.push(templateArray);
        }
            arrayTeste.sort(comparador); // embaralhou o array
            for (let index = 0; index < perguntaCartas; index++) {
            lista.innerHTML += arrayTeste[index];
    } 
}
        else {
            temporizadorVar = 0;
            pickCards();
            
    } 
    
}
function comparador() {
    return Math.random() - 0.5;
}

function gameOver() {
    
    if (document.querySelectorAll(".parrot-card.certas").length === parseInt(perguntaCartas)) {
        clearInterval(temporizadorVar);
        alert(`Você ganhou com ${rodadas.length} rodadas e ${timer} segundos`);
    }  
}

function temporizador() {
    let timerDiv = document.querySelector(".timer");
    timer++;
    timerDiv.innerHTML = `${timer} segundos`
}