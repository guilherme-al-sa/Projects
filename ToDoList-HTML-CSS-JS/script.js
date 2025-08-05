const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-task')

let myListItens = []

function addNewTask() {

  const task = input.value.trim()
  const errorMsg = document.querySelector('.msg-erro')

  if (task === '') {

    errorMsg.textContent = 'Por favor, digite uma tarefa'
    errorMsg.classList.add('visible')

    setTimeout(() =>{
      errorMsg.classList.remove('visible')
    },3000)
    
    return;
  }

  errorMsg.textContent = ''
  errorMsg.classList.remove('visible')

  myListItens.push({
    tarefa: input.value,
    concluida: false
  })

  input.value = ''

  showTask()
}

function showTask() {

  let newLi = ''

  myListItens.forEach((item, position) => {


    newLi = newLi +
      `
    <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="" id="img-task" onclick="completeTask(${position})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="" id="img-task" onclick="deleteItem(${position})">
      </li>
    `


  });

  completeList.innerHTML = newLi

  localStorage.setItem('lista', JSON.stringify(myListItens))   /*tranformar meu objeto em string*/
}

function completeTask(position) {
  myListItens[position].concluida = !myListItens[position].concluida
  showTask()
}

function deleteItem(position) {

  myListItens.splice(position, 1)
  showTask()
}


window.completeTask = function (position) {
  myListItens[position].concluida = !myListItens[position].concluida
  showTask()
}

window.deleteItem = function (position) {
  myListItens.splice(position, 1)
  showTask()
}

function manterList() {
  const taskLocalStorage = localStorage.getItem('lista')


  if (taskLocalStorage) {
    myListItens = JSON.parse(taskLocalStorage) /*transformar em objetivo denovo pra manter na tela*/
  }


  showTask()

}

button.addEventListener('click', addNewTask)

manterList()

// logica do timer

let countdown;
let remainingTime = 1500;
let originalTime = 1500;
let isPaused = false;


const timerDisplay = document.querySelector('.timer-display');
const startButton = document.querySelector('.start-timer-btn');
const pauseButton = document.querySelector('.pause-timer-btn');
const resetButton = document.querySelector('.reset-timer-btn');
const pomodoroButtons = document.querySelectorAll('.pomodoro-btn');

    function updateDisplay(seconds){
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2,0)}`;
    }

    function mostrarAlertaVisual(){
      const container = document.querySelector('.pomodoro-container');
      container.classList.add('alerta-final');

      setTimeout(()=>{
        container.classList.remove('alerta-final');
      },5000);
    }

    function startTimer(){
      if(countdown || isPaused) return;

      let timeLeft = remainingTime;

      countdown =  setInterval(()=>{
        if (!isPaused){
          timeLeft--;
          remainingTime = timeLeft;
          updateDisplay(timeLeft);

          if(timeLeft<= 0){
            clearInterval(countdown);
            countdown = null;
            mostrarAlertaVisual();
          }
        }
      },1000);
    }

    function pauseTimer(){
      isPaused = !isPaused;
      pauseButton.textContent = isPaused ? "Continuar" : "Pausar";
    }

    function resetTimer(){
      clearInterval(countdown);
      countdown = null;
      isPaused = false;
      pauseButton.textContent = "Pausar";
      remainingTime = originalTime;
      updateDisplay(remainingTime);
    }


    pomodoroButtons.forEach(btn =>{
      btn.addEventListener('click',()=>{
        clearInterval(countdown);
        countdown = null;
        isPaused = false;
        pauseButton.textContent = "Pausar"
        originalTime = parseInt(btn.getAttribute('data-time'));
        remainingTime = originalTime;
        updateDisplay(remainingTime);
      });
    });

    startButton.addEventListener('click',startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);


    // inicar sempre com 25
    updateDisplay(remainingTime);