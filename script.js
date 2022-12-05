const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const choosingTable = document.querySelector('.choose-multiplication-table');
const hint = document.querySelector('.hint');
const hintButton = document.querySelector('.hint button');
const hintText = document.querySelector('.hint p');
const hidden = document.querySelector('.hidden');

const multiplicationTable = [];
const multiplicationTableAnswers = [];
const hintComments = ["I don't actually know the answer"];
const answerComments = ['WRONG!'];

let multiplyBy = 1;

const hidenClass = () => {
  hint.classList.remove('hidden');

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

const tableClick = (button, buttonText) => {
  // adds a event listener for every button and prints the text
  button.addEventListener('click', () => {
    const choosenTable = buttonText.textContent;

    getMultiplyTable(choosenTable);

    hidenClass();
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

  for (let i = 0; i < multiplicationTableAnswers.length; i++) {
    console.log(multiplicationTable[i]);
    console.log(multiplicationTableAnswers[i]);
  }
};

// creating all the tables
const tables = createTables();

hintButton.addEventListener('click', () => {
  if (hintText.classList.contains('hidden')) {
    hintText.classList.remove('hidden');
  } else {
    hintText.classList.add('hidden');
  }
});
