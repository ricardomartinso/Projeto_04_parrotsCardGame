let parrotCard;
let parrotCardFront;
let parrotCardBack;
let cartasViradas = [];
let compararGif;
let numeroCartas;
let cartas = document.querySelectorAll(".parrot-card");

embaralharCartas();


function virarCarta(carta) {
        console.log(carta)
        let parrotCardFront = carta.children[0];
        let parrotCardBack = carta.children[1];
        
        console.log(carta.children[1]);
        if (parrotCardBack !== undefined && cartasViradas.length < 2) {
        cartasViradas.push(carta);
        parrotCardFront.classList.add("escondido");
        parrotCardBack.classList.remove("escondido");
        parrotCardBack.classList.add("selecionada");
        
    } 
    compararCartasIguais()
    compararCartasDiferentes()
}

function compararCartasIguais() {
    compararGif = document.querySelectorAll(".parrot-card-back.selecionada");
    let contador = 0;
    if (compararGif[0].attributes.src.value === compararGif[1].attributes.src.value) {
        
        while (contador < 2) {
        compararGif[contador].classList.add("carta-igual");
        compararGif[contador].classList.remove("selecionada");
        contador++;
    }
        cartasViradas = [];
    }

}
function compararCartasDiferentes() {
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

function embaralharCartas() {

    cartas = document.querySelectorAll(".parrot-card");
    
    numeroCartas = prompt("Quantas cartas quer jogar?")
    
    let contador = 0;
    if (numeroCartas % 2 == 0 && numeroCartas >= 4 && numeroCartas <= 14) {
        
        while (contador < (cartas.length - numeroCartas)) {
        cartas[contador].classList.add("hidden");
        contador++
    }
    } else {
        embaralharCartas();
    }
    cartas.sort(comparador);
}

function comparador() {
    return Math.random() - 0.5;
}