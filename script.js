const multiplicationTable = [];

const multiplicationTableAnswers = [];

const hintComments = ["I don't actually know the answer"];

const answerComments = ['WRONG!'];

const getMultiplyTable = () => {};
const multiplyByTable = () => {};

let multiplyBy = 1;

let baseNumber = 3;

for (let i = 0; i <= 9; i++) {
  const multiplication = `${baseNumber} x ${multiplyBy}`;
  const answer = baseNumber * multiplyBy;

  multiplicationTableAnswers.push(answer);

  multiplicationTable.push(multiplication, answer);

  multiplyBy++;
}

for (let i = 0; i <= 9; i++) {}

multiplicationTable.forEach((element) => {
  console.log(element);
});
