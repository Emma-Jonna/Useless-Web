const body = document.querySelector('body');
const choosingTable = document.querySelector('.choose-multiplication-table');

const multiplicationTable = [];
const multiplicationTableAnswers = [];
const hintComments = ["I don't actually know the answer"];
const answerComments = ['WRONG!'];

let multiplyBy = 1;

let baseNumber = 1;

const getMultiplyTable = () => {};
const multiplyByTable = () => {};

// Writes out all multiplicationtables to the user
for (let i = 0; i <= 9; i++) {
  const chooseTableContainer = document.createElement('div');
  const chooseTable = document.createElement('p');

  chooseTableContainer.appendChild(chooseTable);
  choosingTable.appendChild(chooseTableContainer);

  chooseTable.textContent = multiplyBy++;
}

// Puts the questions and answers depending on wich the user chosed
for (let i = 0; i <= 9; i++) {
  const multiplication = `${baseNumber} x ${multiplyBy}`;
  const answer = baseNumber * multiplyBy;

  multiplicationTableAnswers.push(answer);

  multiplicationTable.push(multiplication);

  multiplyBy++;
}
