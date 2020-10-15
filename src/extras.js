const correctSound= new Audio("src/sounds/correct.mp3");
const gameOverSound= new Audio("src/sounds/game-over.mp3");
const bgMusic = new Audio("src/sounds/bg-music.mp3");
const wrong = new Audio("src/sounds/wrong.mp3");
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
const words = ['faster','program','biology','designer', 'development',
'javascript','webahead7',"triangle","facility","proper","emphasis",
"inhabitant","improvement","executive","distribute","responsibility",
"disappear","restaurant","shareholder","magnetic","hardware","software",
"possibility","instruction","identification","recommendation","enthusiasm",
"concentration","mario","ahmed","alaa","muhammad","mahmoud","dana","shireen",
"hamodi","shoog","rakad","salah","hala","nuwrs","nizar","jeries","ammar","omkalthom",
"myassar","lujain"
];

