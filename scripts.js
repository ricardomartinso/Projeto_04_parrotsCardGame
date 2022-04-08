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

pickCards(); // Prompt Qtde Cartas + Random das cartas 


function virarCarta(carta) {
        rodadas.push(carta);
        cartasArray = document.querySelectorAll(".virar-carta-back"); //todas as cartas que foram viradas

        arrayTeste = Array.from(cartasArray);
        let parrotCardFront = carta.children[0]; //div parte frontal da carta
        let parrotCardBack = carta.children[1]; //div parte traseira da carta



        if (cartasViradas.length < 2 && cartasViradas[0] !== carta) {
        parrotCardBack.classList.add("virar-carta-back"); //Efeito de virar a carta e mostrar a parte traseira
        cartasViradas.push(carta); // PUSH para aumentar tamanho do length para só permitir virar até 2 cartas por vez
        }
        if (cartasViradas.length === 2) {
            compararCartas();
        }
    
}

function compararCartas() {
    
    cartasArray = document.querySelectorAll(".virar-carta-back");
    arrayTeste = Array.from(cartasArray);

    if (arrayTeste[0].querySelector("img").attributes.src.value === arrayTeste[1].querySelector("img").attributes.src.value) {

        for (let i = 0; i < 2; i++) {
            cartasArray[i].classList.add("carta-igual");
            cartasArray[i].classList.remove("virar-carta-back");
            cartasArray[i].classList.remove("face");
            cartasArray[i].previousElementSibling.classList.add("hidden");
            cartasArray[i].parentNode.classList.remove("virada");
            cartasArray[i].parentNode.classList.add("certas");
        }
        arrayTeste.pop();
        arrayTeste.pop();
        gameOver();
    } 
    else if (arrayTeste[0].querySelector("img").attributes.src.value !== arrayTeste[1].querySelector("img").attributes.src.value) {
        setTimeout(esperarCarta, 1000);
    }
    cartasViradas = [];
    
}
function esperarCarta() {
        cartasArray = document.querySelectorAll(".virar-carta-back");
        arrayTeste = Array.from(cartasArray);
        for (let i = 0; i < 2; i++) {
        cartasArray[i].classList.remove("virar-carta-back");
    }
    arrayTeste.pop();
    arrayTeste.pop();
}

function pickCards() {
    let lista = document.querySelector(".parrot-cards");
    perguntaCartas = 0;
    perguntaCartas = prompt("Quantas cartas quer jogar?");
    console.log(perguntaCartas);
    let gifs = document.querySelector(".parrot-card-back img");
    arrayTeste = [];

    if (perguntaCartas % 2 == 0 && perguntaCartas >= 4 && perguntaCartas <= 14) {
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
            pickCards();
    } 
    
}
function comparador() {
    return Math.random() - 0.5;
}
function gameOver() {
    if (document.querySelectorAll(".parrot-card.certas").length === parseInt(perguntaCartas)) {
        alert(`Você ganhou em ${rodadas.length} rodadas`);
    }
}