const controle = document.querySelectorAll(".controle-ajuste")
const estatistica = document.querySelectorAll("[data-estatistica]")
const container = document.querySelector(".container")
const botao = document.querySelectorAll(".botao")
const carrossel = document.getElementsByClassName("carrossel")

var yellow = "rgba(201, 198, 0, 0.74)";
var blue = "rgba(0, 80, 201, 0.74)";
var white = "rgba(255, 255, 255, 0.856)";
var black = "rgba(68, 68, 68, 0.74)";
var pink = "rgba(255, 122, 226, 0.74)"
var red = "rgba(206, 0, 0, 0.74)"

let meuBotao = document.getElementById("meuBotao");

var colors = [yellow, blue, white, black, pink, red];
var position = [-100, -900, -1700, -2500, -3300, -4100];

var translateIndex = 0;
var translateIndexC = 0;

//mudar robo para direita
botao[1].addEventListener("click", function() {
    var translateXValue = position[translateIndex];
    container.style.transform = "translateX(" + translateXValue + "px)";
    translateIndex = (translateIndex + 1) % position.length;

    var translateColorsValue = colors[translateIndexC];
    carrossel[0].style.background = translateColorsValue ;
    carrossel[0].style.borderColor = translateColorsValue 
    translateIndexC = (translateIndexC + 1) % colors.length;
});

//mudar robo para esquerda
botao[0].addEventListener("click", function() {
    var translateXValue = position[translateIndex];
    container.style.transform = "translateX(" + translateXValue + "px)";
    translateIndex = (translateIndex - 1) % position.length;

    var translateColorsValue = colors[translateIndexC];
    carrossel[0].style.background = translateColorsValue ;
    carrossel[0].style.borderColor = translateColorsValue 
    translateIndexC = (translateIndexC - 1) % colors.length;
});

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === '-') {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1;
        }
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(operacao, peca) {
    estatistica.forEach( e => {

        if (operacao === "-") {
            if (e.textContent > 0) {
            e.textContent = parseInt(e.textContent) - pecas[peca][e.dataset.estatistica];
            }
        } else {
            e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica];
        }
    })
}


