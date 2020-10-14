const currentTimer = document.querySelector('#sec');
const currentWord = document.querySelector('#current-word');
const input = document.querySelector('#typing-area');
const currentScore = document.querySelector('#score');
const highiestScore = document.querySelector('#high-score');
const level = document.querySelector('#level-list');

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
const failed=[];
const success=[];
let flag;
// let userInput = input.value;


let timer;


function filterWords(check){
    if(!check){
        failed.push(input.value);
    }
    else if(check){
        success.push(input.value);
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
      console.log(selectedLevel);
    let t=setInterval(function(){
        console.log(countDown);
        countDown--;
        if(countDown==0){
            clearInterval(t);
            start();
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



    let storage=localStorage.getItem("highScore");
    let newStorage=Array.from(JSON.parse(storage));
    console.log(storage);
    newStorage.push(score);
    console.log(newStorage);
    localStorage.setItem("highScore",JSON.stringify(newStorage));
}

function restartGame(){
     selectedLevel=Number(level.value);
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