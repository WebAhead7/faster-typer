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
const darkMode = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
    const body = document.querySelector('body');
input.focus();
const words = ['can','type', 'faster','program','biology','designer', 'development', 'javascript','webahead7'];

