let secuencia = []
let indice = 0
let secuencia_jugador = []
let puntos = 0

let secuenciaMostrada = false

function handleDisableButton(){
    const element =document.getElementById("play-button")
    element.disabled = secuenciaMostrada
}

function handlePoints(){
    const element = document.getElementById("puntos")

    element.textContent = puntos
}

function gameLost(){
    const name = localStorage.getItem("nombre")

    let puntuaciones = localStorage.getItem("puntuaciones")

    if(!puntuaciones){
        puntuaciones = []
    }else {
        puntuaciones = JSON.parse(puntuaciones)
    }

    puntuaciones.push({nombre:name, puntos:puntos})

    localStorage.setItem("puntuaciones",JSON.stringify(puntuaciones))
    
    alert(`Juego terminado, hiciste ${puntos} puntos`)

    window.location.href = "../index.html"
}

function comprobarSecuencia(){
    console.log("secuencia", secuencia)
    console.log("secuenciajugador", secuencia_jugador)
    for(let i = 0; i< secuencia_jugador.length; i++){
        if(secuencia_jugador[i] !== secuencia[i]){
            gameLost()
        }
    }

    if(secuencia.length === secuencia_jugador.length){
        puntos += 1;
        handlePoints()
        console.log("puntos", puntos)
        secuenciaMostrada = false;
        handleDisableButton()
    }
}

function topLeftButtonClick(){
    const audio = new Audio("../sounds/button-pressed-38129.mp3")
    audio.play()

    if(secuenciaMostrada){
        secuencia_jugador.push(0)
        comprobarSecuencia()
    }else{
        alert("Presiona el botón de reproducir secuencia")
    }
}

function topRightButtonClick(){
    const audio = new Audio("../sounds/button-pressed-38129.mp3")
    audio.play()

    if(secuenciaMostrada){
        secuencia_jugador.push(1)
        comprobarSecuencia()
    }else{
        alert("Presiona el botón de reproducir secuencia")
    }
}

function bottomRightButtonClick(){
    const audio = new Audio("../sounds/button-pressed-38129.mp3")
    audio.play()

    if(secuenciaMostrada){
        secuencia_jugador.push(2)
        comprobarSecuencia()
    }else{
        alert("Presiona el botón de reproducir secuencia")
    }
}

function bottomLeftButtonClick(){
    const audio = new Audio("../sounds/button-pressed-38129.mp3")
    audio.play()
    
    if(secuenciaMostrada){
        secuencia_jugador.push(3)
        comprobarSecuencia()
    }else{
        alert("Presiona el botón de reproducir secuencia")
    }
}

function reproducirSecuencia(){
    secuenciaMostrada = true
    handleDisableButton()
    const newStep = Math.floor(Math.random() * 4)

    secuencia.push(newStep)
    indice = 0

    console.log(secuencia)
    secuencia_jugador = []

    const myInterval = setInterval(()=>{
        const currentStep = secuencia[indice]

        let element = null

        if(currentStep === 0){
            element = document.getElementById("top-left")
        } else if(currentStep === 1){
            element = document.getElementById("top-right")
        }else if(currentStep === 2){
            element = document.getElementById("bottom-right")
        }else if(currentStep === 3){
            element = document.getElementById("bottom-left")
        }

        if(element){
            element.classList.add("click")

            setTimeout(()=>{
                element.classList.remove("click")
            },500)
        }
        
        indice += 1

        if(indice >= secuencia.length){
            clearInterval(myInterval)
        }
    },1000)
}