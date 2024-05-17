const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() *10)

let xAttempts = 1

//Eventos
//função callback
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  inputNumber.value = ""
  xAttempts++

  if (Number(inputNumber.value) == randomNumber){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
  }
  console.log(xAttempts)
}


function handleResetClick(){  
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
}

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)