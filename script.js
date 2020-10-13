const currentTimer = document.querySelector('#sec');
const currentWord = document.querySelector('#current-word');
const input = document.querySelector('#typing-area');
const currentScore = document.querySelector('#score');
const highiestScore = document.querySelector('#high-score');
const level = document.querySelector('#level-list');

const words = ['can','type', 'faster','biolog','biology','designer', 'development', 'javascript','webahead7'];

let score = 0;
let time = 7;
let randomText;

let timer = 0;

function randomWord(){
    randomText = words[Math.floor(Math.random() * words.length )];
}


function showWord(){
    currentWord.innerText = randomText;
}

function checkWord(curr, typed) {
    curr === typed ? true : false;

};

function updateScore() {

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
    }
};

input.addEventListener('keyup',(e)=>{
    if(e.target){
        timer = setInterval(updateTimer, 1000);
    }
})