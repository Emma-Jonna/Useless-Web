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

// functions
let multiplyBy = 1;

const hiddenClass = () => {
  h3.classList.remove('hidden');
  hint.classList.remove('hidden');
  choiceButtons.classList.remove('hidden');
  backButton.classList.remove('hidden');

  h1.classList.add('hidden');
  h2.classList.add('hidden');
  choosingTable.classList.add('hidden');
};

const createTables = () => {
  // Writes out all multiplicationtables to the user
  for (let i = 0; i <= 9; i++) {
    const chooseTableContainer = document.createElement('button');
    const chooseTable = document.createElement('p');
    chooseTableContainer.classList.add('multiplication-table');

    chooseTableContainer.appendChild(chooseTable);
    choosingTable.appendChild(chooseTableContainer);

    chooseTable.textContent = multiplyBy++;

    tableClick(chooseTableContainer, chooseTable);
  }
};

const printTable = () => {
  /* for (let i = 0; i < multiplicationTableAnswers.length; i++) {
    console.log(multiplicationTable[i]);
    console.log(multiplicationTableAnswers[i]);
  } */

  const randomIndex = randomNumber(multiplicationTable.length);

  h3.textContent = multiplicationTable[randomIndex];
  // h3.textContent = multiplicationTableAnswers[randomIndex];

  console.log(multiplicationTable[randomIndex]);
  console.log(multiplicationTableAnswers[randomIndex]);
};

const tableClick = (button, buttonText) => {
  // adds a event listener for every button and prints the text
  button.addEventListener('click', () => {
    const choosenTable = buttonText.textContent;

    // console.log(choosenTable);

    getMultiplyTable(choosenTable);

    hiddenClass();

    printTable();
  });
};

const getMultiplyTable = (table) => {
  multiplyBy = 1;
  // Puts the questions and answers depending on wich the user chosed
  for (let i = 0; i <= 9; i++) {
    const multiplication = `${table} x ${multiplyBy}`;
    const answer = table * multiplyBy;

    multiplicationTableAnswers.push(answer);

    multiplicationTable.push(multiplication);

    multiplyBy++;
  }

  // printTable();

  /* for (let i = 0; i < multiplicationTableAnswers.length; i++) {
    console.log(multiplicationTable[i]);
    console.log(multiplicationTableAnswers[i]);
  } */

  // function to print
};

const randomNumber = (maxValue) => {
  // console.log(Math.floor(Math.random() * maxValue));
  const randNum = Math.floor(Math.random() * maxValue);

  return randNum;
};

hintButton.addEventListener('click', () => {
  if (hintText.classList.contains('hidden')) {
    hintText.classList.remove('hidden');

    const randomHint = randomNumber(hintComments.length);

    // console.log(randomHint);

    // console.log(hintComments[randomHint]);

    hintText.textContent = hintComments[randomHint];
  } else {
    hintText.classList.add('hidden');
  }
});

// adding eventlistener for every answer button
const answerButtons = () => {
  answerButton.forEach((element) => {
    element.addEventListener('click', () => {
      console.log(element.textContent);
    });
  });
};

// Calling functions

// creating all the tables
const tables = createTables();

// callijg function form answer buttons
answerButtons();
