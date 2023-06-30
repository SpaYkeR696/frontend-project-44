import runCalc from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

function getSymbol(symbol) {
  const symbolLength = symbol.length - 1;
  const randomIndex = getRandomNum(0, symbolLength);
  const randomSymbol = symbol[randomIndex];
  return randomSymbol;
}

// eslint-disable-next-line consistent-return
function calculation(symbol, firstNum, secondNum) {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '/':
      return firstNum / secondNum;
    default:
      throw new Error(symbol);
  }
}

function calc() {
  const randomNumber1 = getRandomNum(0, 10);
  const randomNumber2 = getRandomNum(0, 10);
  const operation = getSymbol(operations);
  const question = `${randomNumber1} ${operation} ${randomNumber2}`;
  const correctAnswer = String(calculation(operation, randomNumber1, randomNumber2));

  return [question, correctAnswer];
}

export default () => {
  runCalc(description, calc);
};
