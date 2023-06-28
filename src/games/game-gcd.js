import runGCD from '../index.js';
import randomNum from '../utilities/randomNum.js';

const description = 'Find the greatest common divisor of given numbers';

function getGCD(num1, num2) {
  if (!num2) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
}

function gcd() {
  const num1 = randomNum(0, 10);
  const num2 = randomNum(0, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));

  return [question, correctAnswer];
}

export default () => {
  runGCD(description, gcd);
};
