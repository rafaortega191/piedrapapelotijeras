const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const empate = 0;
const victoria = 1;
const derrota = 2;

let playerScore = 0;
let computerScore = 0;


const rockBtn = document.getElementById("piedra");
const paperkBtn = document.getElementById("papel");
const scissorBtn = document.getElementById("tijera");
const resetBtn = document.getElementById("reset");
const resultText = document.getElementById("texto-inicio");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
const scoreText = document.getElementById("score");
const scoreTextpc = document.getElementById("scorepc");

rockBtn.addEventListener("click", ()=>{
    jugada(PIEDRA);
});
paperkBtn.addEventListener("click", ()=>{
    jugada(PAPEL);
});
scissorBtn.addEventListener("click", ()=>{
    jugada(TIJERA);
});
resetBtn.addEventListener("click", ()=>{
        limpiar();
})

function jugada(userOption){
    const machineOption = calcularresultadomaquina();

    const result = calcularresultado(userOption, machineOption);

    userImg.src = "img/"+userOption+".png";
    machineImg.src = "img/"+machineOption+".png";

    switch(result){
        case empate:
            resultText.innerHTML = "EMPATASTE"
            
            break;
        case victoria:
            resultText.innerHTML = "GANASTE"
            playerScore++;
            scoreText.innerHTML = "Puntos del Jugador: " + playerScore;
            break;
        case derrota:
            resultText.innerHTML = "PERDISTE"
            computerScore++;
            scoreTextpc.innerHTML = "Puntos del PC: " + computerScore;
            
            break;
    }
}

function calcularresultadomaquina(){
   const number = Math.floor(Math.random() * 3)

    switch(number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }

}

function calcularresultado(userOption, machineOption){
    if(userOption === machineOption){
        return empate;

    }else if(userOption === PIEDRA){
        if(machineOption === PAPEL) return derrota;
        if(machineOption === TIJERA) return victoria;

    }else if(userOption === PAPEL){
        if(machineOption === TIJERA) return derrota;
        if(machineOption === PIEDRA) return victoria;

    }else if(userOption === TIJERA){
        if(machineOption === PIEDRA) return derrota;
        if(machineOption === PAPEL) return victoria;
    }
}

function limpiar(){
    window.location.reload();
  }