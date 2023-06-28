import runCalc from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'What is the result of the expression?';

const operation = ['+', '-', '*'];

function getOperationSymbol(symbol) {
  const symbolLength = symbol.length;
  const randomIndex = getRandomNum(0, symbolLength);
  const randomSymbol = symbol[randomIndex];
  return randomSymbol;
}

function calculation(symbol, firstNum, secondNum) {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown order state: ${symbol}!`);
  }
}

function expression() {
  const randomNumber1 = getRandomNum(0, 20);
  const randomNumber2 = getRandomNum(0, 20);
  const operations = getOperationSymbol(operation);
  const question = `${randomNumber1} ${operations} ${randomNumber2}`;
  const correctAnswer = String(calculation(operations, randomNumber1, randomNumber2));

  return [question, correctAnswer];
}

export default () => {
  runCalc(description, expression);
};
