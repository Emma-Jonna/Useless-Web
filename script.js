const body = document.querySelector('body');
const choosingTable = document.querySelector('.choose-multiplication-table');
const hint = document.querySelector('.hint button');
const hintText = document.querySelector('.hint p');

const multiplicationTable = [];
const multiplicationTableAnswers = [];
const hintComments = ["I don't actually know the answer"];
const answerComments = ['WRONG!'];

let multiplyBy = 1;

let baseNumber = 1;

const tableClick = (button, buttonText) => {
  button.addEventListener('click', () => {
    // console.log(chooseTable.textContent);
    const choosenTable = buttonText.textContent;
    // console.log(choosenTable);

    return choosenTable;
  });
};

const getMultiplyTable = () => {
  // Puts the questions and answers depending on wich the user chosed
  for (let i = 0; i <= 9; i++) {
    const multiplication = `${baseNumber} x ${multiplyBy}`;
    const answer = baseNumber * multiplyBy;

    multiplicationTableAnswers.push(answer);

    multiplicationTable.push(multiplication);

    multiplyBy++;
  }
};

const createTables = () => {
  // Writes out all multiplicationtables to the user
  for (let i = 0; i <= 9; i++) {
    const chooseTableContainer = document.createElement('button');
    const chooseTable = document.createElement('p');
    chooseTableContainer.classList.add('.multiplication-table');

    chooseTableContainer.appendChild(chooseTable);
    choosingTable.appendChild(chooseTableContainer);
    chooseTable.textContent = multiplyBy++;

    console.log(tableClick(chooseTableContainer, chooseTable));
  }
};

const multiplyByTable = () => {};

const tables = createTables();

/* chooseTableContainer.addEventListener('click', () => {
  // console.log(chooseTable.textContent);
  const choosenTable = chooseTable.textContent;
  console.log(choosenTable);
}); */

hint.addEventListener('click', () => {
  if (hintText.classList.contains('hidden')) {
    hintText.classList.remove('hidden');
  } else {
    hintText.classList.add('hidden');
  }
});
