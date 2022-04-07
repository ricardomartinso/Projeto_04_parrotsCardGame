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

pickCards();



function virarCarta(carta) {

        let cartasArray = document.querySelectorAll(".virar-carta-back");
        let viradas = document.querySelectorAll(".viradas");
        let parrotCardFront = carta.children[0];
        let parrotCardBack = carta.children[1];

        if (cartasViradas.length < 2) {

        parrotCardBack.classList.add("virar-carta-back");
        cartasViradas.push(carta);
        console.log(cartasViradas.length)
    }
    compararCartas();
}
// cartasArray[0].querySelector("img").attributes.src.value
function compararCartas() {
    let cartasArray = document.querySelectorAll(".virar-carta-back");
    
    if (cartasArray[0].querySelector("img").attributes.src.value === cartasArray[1].querySelector("img").attributes.src.value) {

        for (let i = 0; i < 2; i++) {
            cartasArray[i].classList.add("carta-igual");
            cartasArray[i].parentNode.classList.remove("virada");
        }

    } 
    
    else if (cartasArray[0].querySelector("img").attributes.src.value !== cartasArray[1].querySelector("img").attributes.src.value) {
        for (let i = 0; i < 2; i++) {
            cartasArray[i].classList.remove("virar-carta-back");
            cartasArray[i].parentNode.classList.remove("selecionada");
        }
    }
        cartasViradas = [];
}

 
/*function compararCartasDiferentes() {
    compararGif = document.querySelectorAll(".parrot-card-back.selecionada");

    if (compararGif[0].attributes.src.value !== compararGif[1].attributes.src.value) {
        compararGif[0].classList.add("escondido");
        compararGif[0].parentNode.querySelector("img").classList.remove("escondido");
        compararGif[0].classList.remove("selecionada");
        compararGif[1].classList.add("escondido");
        compararGif[1].parentNode.querySelector("img").classList.remove("escondido");
        compararGif[1].classList.remove("selecionada");
        cartasViradas = [];
    }
}
*/

function pickCards() {
    let lista = document.querySelector(".parrot-cards");
    
    let perguntaCartas = prompt("Quantas cartas quer jogar?");
    let gifs = document.querySelector(".parrot-card-back img");
    let arrayTeste = [];

    if (perguntaCartas % 2 == 0 && perguntaCartas >= 4 && perguntaCartas <= 14) {
    for (let i = 0; i < perguntaCartas; i++) {
        let templateArray = `<div class="parrot-card virada" onclick="virarCarta(this)">
        <div class="parrot-card-front face"><img src="./images/front.png"></div>
        <div class="parrot-card-back face"><img src="${gifsArray[i]}"></div>
</div>`
        arrayTeste.push(templateArray);
        }

    } else {
        pickCards();
    }

    arrayTeste.sort(comparador); // embaralhou o array

    for (let i = 0; i < perguntaCartas; i++) {
        lista.innerHTML += arrayTeste[i];
        }

}
function comparador() {
    return Math.random() - 0.5;
}