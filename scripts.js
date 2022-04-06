let parrotCard;
let parrotCardFront;
let parrotCardBack;
let parrotCard1;
let parrotCard2;
let duasCartas = [];

function virarCarta(carta) {
        let parrotCardFront = carta.children[0];
        let parrotCardBack = carta.children[1];
        

        if (duasCartas.length < 2) {
        parrotCardFront.classList.add("escondido");
        parrotCardBack.classList.remove("escondido");

    }  
    duasCartas.push(carta);
    checarCartas();
    
}

function checarCartas() {
     parrotCard1 = document.querySelectorAll(".parrot-card").children[0];
     parrotCard2 = document.querySelectorAll(".parrot-card").children[1];
    let cards = document.querySelectorAll(".parrot-card");
    if (duasCartas.length === 2) {
        parrotCard1.children[0].remove("escondido");
        parrotCard1.children[1].add("escondido");
        parrotCard2.children[0].remove("escondido");
        parrotCard2.children[1].add("escondido");
    }
}