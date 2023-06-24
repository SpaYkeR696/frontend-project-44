import run from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'What is the result of the expression?';

const operation = ['+', '-', '*'];

function getOperation() {
  return operation[getRandomNum(2)];
}

function calculation(symbol, firstNum, secondNum) {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default: return null;
  }
}

function expression() {
  const randomNumber1 = getRandomNum(99);
  const randomNumber2 = getRandomNum(99);
  const operations = getOperation();
  const question = `${randomNumber1} ${operations} ${randomNumber2}`;
  const correctAnswer = String(calculation(operations, randomNumber1, randomNumber2));

  return [question, correctAnswer];
}

export default () => {
  run(description, expression);
};
