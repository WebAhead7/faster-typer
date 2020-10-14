const currentTimer = document.querySelector('#sec');
const currentWord = document.querySelector('#current-word');
const input = document.querySelector('#typing-area');
const currentScore = document.querySelector('#score');
const highiestScore = document.querySelector('#high-score');
const level = document.querySelector('#level-list');

input.focus();
const words = ['can','type', 'faster','biolog','biology','designer', 'development', 'javascript','webahead7'];

let score = 0;
let time = 10;
let randomText;

let flag;
// let userInput = input.value;


let timer = setInterval(updateTimer, 1000);


function randomWord(){
    randomText = words[Math.floor(Math.random() * words.length )];
    currentWord.innerText = randomText;
}

(function startGame(){
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
};

function gameOver() {

}

function restartGame(){

}



function updateTimer(){
    time--;
    // currentTimer.innerText = `${time}s`;
    if(time === 0) {
        clearInterval(timer);  
        gameOver();
    }
    console.log(time);
};

input.addEventListener('keyup',(e)=>{
    if(input.value.length == randomText.length){
       flag = checkWords();
       console.log(flag);
       if(!flag){
           randomWord();
           input.value = '';
       } else {
           time += lvl2;
           input.value = '';
           updateScore();
           randomWord();
       }
    }

    // console.log(randomText.length, randomText);
})