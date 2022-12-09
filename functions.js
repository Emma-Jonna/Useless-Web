const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h5 = document.querySelector('h5');
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
const answer1 = document.getElementById('1');
const answerx = document.getElementById('x');
const answer2 = document.getElementById('2');

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

// adds the table num to an array
const test = () => {
  for (let i = 0; i <= choosenTable.length - 1; i++) {
    // console.log(choosenTable[i]);
  }
};

const randomNumber = (maxValue) => {
  const randNum = Math.floor(Math.random() * maxValue);

  return randNum;
};

// removes or adds the hidden class
const hiddenClass = () => {
  h3.classList.remove('hidden');
  hint.classList.remove('hidden');
  choiceButtons.classList.remove('hidden');
  backButton.classList.remove('hidden');

  h1.classList.add('hidden');
  h2.classList.add('hidden');
  chooseMultiplicationTable.classList.add('hidden');
};

const getMultiplyTableList = (table) => {
  multiplyBy = 1;
  // Puts the questions and answers depending on wich the user chosed
  for (let i = 0; i <= 9; i++) {
    const multiplication = `${table} x ${multiplyBy}`;
    const answer = table * multiplyBy;

    multiplicationTableAnswers.push(answer);

    multiplicationTable.push(multiplication);

    multiplyBy++;
  }
};

// functions that makes sure the same question is not repeated after each other
let oldNumber = '';

const uniqueNumber = (newNumber, array) => {
  let uniqueAnswer = false;

  while (uniqueAnswer === false) {
    if (oldNumber === newNumber) {
      newNumber = randomNumber(array);
    } else {
      uniqueAnswer = true;
    }
  }

  oldNumber = newNumber;

  return newNumber;
};

// prints out the question and answers and check to make sure the correct answer is not showing up
const notCorrectAnswer = () => {
  let tableIndex = uniqueNumber(
    randomNumber(multiplicationTable.length),
    multiplicationTable.length
  );

  let answerOneIndex = randomNumber(multiplicationTableAnswers.length);
  let answerXIndex = randomNumber(multiplicationTableAnswers.length);
  let answerTwoIndex = randomNumber(multiplicationTableAnswers.length);

  let isCorrect = true;

  while (isCorrect === true) {
    if (
      tableIndex === answerOneIndex ||
      tableIndex === answerXIndex ||
      tableIndex === answerTwoIndex ||
      answerOneIndex === answerXIndex ||
      answerXIndex === answerTwoIndex ||
      answerTwoIndex === answerOneIndex
    ) {
      answerOneIndex = randomNumber(multiplicationTableAnswers.length);
      answerXIndex = randomNumber(multiplicationTableAnswers.length);
      answerTwoIndex = randomNumber(multiplicationTableAnswers.length);
    } else {
      answer1.textContent = multiplicationTableAnswers[answerOneIndex];
      answerx.textContent = multiplicationTableAnswers[answerXIndex];
      answer2.textContent = multiplicationTableAnswers[answerTwoIndex];
      isCorrect = false;
    }
  }

  h3.textContent = multiplicationTable[tableIndex];
};

// gives a random hint att every press
hintButton.addEventListener('click', () => {
  if (hintText.classList.contains('hidden')) {
    hintText.classList.remove('hidden');

    const randomHint = uniqueNumber(
      randomNumber(hintComments.length),
      hintComments.length
    );

    hintText.textContent = hintComments[randomHint];
  } else {
    hintText.classList.add('hidden');
  }
});

const tableClick = (table) => {
  choosenTable.push(multiplicationTableText[table - 1].textContent);

  test();
  hiddenClass();
  getMultiplyTableList(choosenTable[0]);
  notCorrectAnswer();
};

answerButton.forEach((element) => {
  element.addEventListener('click', () => {
    notCorrectAnswer();

    h5.style.opacity = '100%';
    h5.textContent =
      answerComments[
        uniqueNumber(randomNumber(answerComments.length), answerComments.length)
      ];
  });
});
