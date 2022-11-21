const words = [
    'californication',
    'otherside',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'lucho',
    'zephyr',
    'funky',
    'chili'
];

let palabra = document.querySelector("#randomWord")
let palabraIngresada = document.querySelector("#text")
let tiempo = document.querySelector("#timeSpan")
let puntos = document.querySelector("#score")
let fin = document.querySelector("#end-game-container")
let divs = document.querySelector(".main")
let palabraAleatoria = randomWords()
let time = 10
let score = 0
let timeInterval = setInterval(actualizarTiempo, 1000);

function randomWords(){
    return words[parseInt(Math.random()*words.length)]
}

function addToDom(){
    palabra.textContent= randomWords()    
}
