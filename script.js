highScore();
input.blur();
innerLevel.value = level.options[level.selectedIndex].text;
let selectedLevel=5;
let time=5;
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
};

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
    
};

function start() {
    timer = setInterval(updateTimer, 1000);
};

function startGame(){
    bgMusic.volume=0.2;
    bgMusic.play();      
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
};

function randomWord(){
    randomText = words[Math.floor(Math.random() * words.length )];
    showWord();
};

(function firstRandom(){
    randomWord();
      }
  )();

function showWord(){
    currentWord.innerText = randomText;
};

function checkWords() {
    if(randomText === input.value){
        correctSound.play();
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
    bgMusic.pause();
    if(score<5){
        gameOverSound.volume=0.2;
        gameOverSound.play();
    }
    input.value = '';
    input.blur();
    restartOverlay.style.display = 'flex';
    finalScore.innerText = score;
    let storage=localStorage.getItem("highScore");
    let newStorage=Array.from(JSON.parse(storage));
    newStorage.push(score);
    localStorage.setItem("highScore",JSON.stringify(newStorage));
};

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
     time = 5;
     countDown=3;
     failed=[];
     success=[];
     failWords.innerHTML = '';  
     passWords.innerHTML = '';   
     level.addEventListener("change",(e)=>{
        selectedLevel=parseInt(e.target.value);
        time=selectedLevel;
    })
};

function updateTimer(){
    time--;
    currentTimer.innerText = `${time}s`;
    if(time === 0) {
        clearInterval(timer);  
        gameOver();
    }
};

function checkGame(falgs){
    if(!falgs){
        filterWords(falgs);
        randomWord();
        input.value = '';
    } else {
     filterWords(falgs);
        time += selectedLevel;
        input.value = '';
        updateScore();
        randomWord();
    }
};

input.addEventListener('keyup',(e)=>{
    if(input.value.length >= randomText.length){
       flag = checkWords();
       checkGame(flag)
    }
});

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
darkMode.addEventListener("change", ()=> document.body.classList.toggle('dark'));