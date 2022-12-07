const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const choosingTable = document.querySelector('.choose-multiplication-table');
const hint = document.querySelector('.hint');
const hintButton = document.querySelector('.hint button');
const hintText = document.querySelector('.hint p');
const hidden = document.querySelector('.hidden');
const choiceButtons = document.querySelector('.choice-buttons');
const answerButton = document.querySelectorAll('.answer');
const backButton = document.querySelector('.back-to-start');

// arrays
const multiplicationTable = [];
const multiplicationTableAnswers = [];
const tableChosen = [];
const hintComments = [
  "I don't actually know the answer",
  'Were you asleep during class?',
  "I don't want to help you",
  'Perhaps you should cheat on the test',
  "You don't know the answer",
];
const answerComments = [
  'WRONG!',
  'Not even close',
  'You are definitely failing the next test',
  'You suck at math',
  'Maybe you should drop out of school',
];
