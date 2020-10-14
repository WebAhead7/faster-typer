const currentTimer = document.querySelector('#sec');
const currentWord = document.querySelector('#current-word');
const input = document.querySelector('#typing-area');
const currentScore = document.querySelector('#score');
const highiestScore = document.querySelector('#high-score');
const level = document.querySelector('#level-list');
const innerLevel = document.querySelector('#level-list1');
const passWords = document.querySelector('#pass-words');
const failWords = document.querySelector('#fail-words');
const startButton = document.querySelector('.startgame');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.inner-overlay')
const overlayHeader = document.querySelector('.overlay h1');
const overlayCountdown = document.querySelector('#countdown');
const restartOverlay = document.querySelector('.restart-overlay');
const restartButton = document.querySelector('.restartgame');
const finalScore = document.querySelector('#restart-score');
input.focus();
const words = ['can','type', 'faster','program','biology','designer', 'development', 'javascript','webahead7'];

let selectedLevel=10;
let time=10;
highScore();
level.addEventListener("change",(e)=>{
    selectedLevel=parseInt(e.target.value);
    time=selectedLevel;
})
let score = 0;
let countDown=3;
let randomText;
let failed=[];
let success=[];
let flag;
// let userInput = input.value;



let timer;


function filterWords(check){
    let passed;

    if(!check){
        failed.push(input.value);
        passed =  `<span class="failed-word">${input.value}</span>`
        failWords.insertAdjacentHTML('beforeend', passed)
    }
    else if(check){
        success.push(input.value);
        passed = `<span class="passed-word">${input.value}</span>`
        passWords.insertAdjacentHTML('beforeend', passed)
    }
}

function highScore(){
    let storage=localStorage.getItem("highScore");
    if(!JSON.parse(storage)){
        localStorage.setItem("highScore",JSON.stringify([]));
    }
    else{
        if(JSON.parse(storage).length==0){
            highiestScore.innerText= 0;
        }
        else{
            highiestScore.innerText=Math.max(...JSON.parse(storage)) || 0;
        }
    }

    console.log(JSON.parse(storage));
    
}



function start() {
    timer = setInterval(updateTimer, 1000);
  }


  function startGame(){

     innerLevel.value = level.options[level.selectedIndex].text;
       startButton.classList.remove('show');
       overlayHeader.classList.remove('show');
       overlayContent.classList.remove('show');

      startButton.classList.add('hide');
     
      overlayHeader.classList.add('hide');

      overlayContent.classList.add('hide');
        overlayCountdown.style.display = 'flex';
      level.style.display = 'none';
    
      let t = setInterval(function(){
          overlayCountdown.innerText = `${countDown}`
          countDown--;
        if(countDown == -1){
            overlay.classList.toggle('hide');
            start();
            input.focus();
            clearInterval(t);
        }
    },1000);



  }


function randomWord(){
    randomText = words[Math.floor(Math.random() * words.length )];
    showWord();
}

(function firstRandom(){
    randomWord();      
      }
  )();

function showWord(){
    currentWord.innerText = randomText;
}

function checkWords() {
    if(randomText === input.value){
         return true;
    }else{
        return false;
    }
};

function updateScore() {
    score++;
    currentScore.innerText=score;
};

function gameOver() {

    restartOverlay.style.display = 'flex';
    finalScore.innerText = score;
    let storage=localStorage.getItem("highScore");
    let newStorage=Array.from(JSON.parse(storage));
    console.log(storage);
    newStorage.push(score);
    console.log(newStorage);
    localStorage.setItem("highScore",JSON.stringify(newStorage));
}

function restartGame(){

    restartOverlay.style.display = 'none';
    overlay.classList.toggle('hide');
    startButton.classList.remove('hide');
    startButton.classList.add('show');
    overlayHeader.classList.remove('hide');
    overlayHeader.classList.add('show');
    level.style.display = 'block';
    overlayContent.classList.remove('hide');
    overlayCountdown.style.display = 'none';



     score = 0;
     time = 10;
     countDown=3;
     randomText;
     failed=[];
     success=[];
}



function updateTimer(){
    time--;
    currentTimer.innerText = `${time}s`;
    if(time === 0) {
        clearInterval(timer);  
        gameOver();
    }
    console.log(time);
};

input.addEventListener('keyup',(e)=>{
    if(input.value.length >= randomText.length){
       flag = checkWords();
       console.log(flag);
       if(!flag){
           filterWords(flag);
           randomWord();
           input.value = '';
       } else {
        filterWords(flag);
           time += selectedLevel;
           input.value = '';
           updateScore();
           randomWord();
       }
    }

    // console.log(randomText.length, randomText);
})

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);