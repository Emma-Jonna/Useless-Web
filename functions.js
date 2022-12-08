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
const chooseMultiplicationTable = document.querySelector(
  '.choose-multiplication-table'
);
const multiplicationTableButton = document.querySelectorAll(
  '.multiplication-table'
);
const multiplicationTableText = document.querySelectorAll(
  '.multiplication-table p'
);
const table1 = document.getElementById('1');
const table2 = document.getElementById('2');
const table3 = document.getElementById('3');
const table4 = document.getElementById('4');
const table5 = document.getElementById('5');
const table6 = document.getElementById('6');
const table7 = document.getElementById('7');
const table8 = document.getElementById('8');
const table9 = document.getElementById('9');
const table10 = document.getElementById('10');

// arrays
const multiplicationTable = [];
const multiplicationTableAnswers = [];
const choosenTable = [];
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

let multiplyBy = 1;

/* const getTable = (table) => {
  for (let i = 0; i <= 9; i++) {
    const multiplication = `${table} x ${multiplyBy}`;
    const answer = table * multiplyBy;

    multiplicationTableAnswers.push(answer);

    multiplicationTable.push(multiplication);

    multiplyBy++;
  }
}; */

const test = () => {
  for (let i = 0; i <= choosenTable.length - 1; i++) {
    console.log(choosenTable[i]);
  }
};

const randomNumber = (maxValue) => {
  const randNum = Math.floor(Math.random() * maxValue);

  return randNum;
};

const hiddenClass = () => {
  h3.classList.remove('hidden');
  hint.classList.remove('hidden');
  choiceButtons.classList.remove('hidden');
  backButton.classList.remove('hidden');

  h1.classList.add('hidden');
  h2.classList.add('hidden');
  chooseMultiplicationTable.classList.add('hidden');
};

hintButton.addEventListener('click', () => {
  if (hintText.classList.contains('hidden')) {
    hintText.classList.remove('hidden');

    const randomHint = randomNumber(hintComments.length);

    hintText.textContent = hintComments[randomHint];
  } else {
    hintText.classList.add('hidden');
  }
});

const tableClick = (table) => {
  // console.log(multiplicationTableText[table - 1].textContent);
  // let tableNum = multiplicationTableText[table].textContent;

  // console.log(multiplicationTableButton[table - 1].table);

  choosenTable.push(multiplicationTableText[table - 1].textContent);

  test();
  hiddenClass();

  // getTable(tableNum);
};

/* for (let i = 0; i <= 9; i++) {
  multiplicationTableButton[i].addEventListener('click', () => {
    console.log(multiplicationTableText[i].textContent);
    let table = multiplicationTableText[i].textContent;

    console.log(multiplicationTableButton[i]);

    // choosenTable.push(multiplicationTableButton[i].table);

    getTable(table);
  });
} */

console.log('hello');

console.log(choosenTable);
