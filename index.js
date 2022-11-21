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

function actualizarTiempo(){
    time = time-1
    if(time==0){
        clearInterval(timeInterval)
        gameOver()
    }
    tiempo.textContent = time
}

function updateScore(){
    score +=1
    puntos.textContent = score    
}

function gameOver(){
    fin.innerHTML = `<h2>Te quedaste sin tiempo</h2>`
    fin.innerHTML += `<p>Tu puntaje fue ${score}</p>`
    fin.innerHTML += `<button onclick="location.reload()">Volve a empezar</button>`
    divs.style.setProperty("display","none")
}

palabraIngresada.addEventListener("input",function(e){
    console.log(e)
    if(palabra.textContent == palabraIngresada.value){
        time += 3
        addToDom()
        updateScore()
        palabraIngresada.value=""
    } else { console.log("no es correcta")}
})

addToDom()