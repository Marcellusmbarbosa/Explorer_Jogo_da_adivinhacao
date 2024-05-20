//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() *10)

let xAttempts = 1

//Eventos

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('?', function(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
})

//funções
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  inputNumber.value = ""
  xAttempts++

  if (Number(inputNumber.value) == randomNumber){
    toggleScreen()    
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
  }
  console.log(xAttempts)
}


function handleResetClick(){  
  toggleScreen()
  xAttempts = 1
  let randomNumber = Math.round(Math.random() *10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}