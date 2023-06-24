import run from '../index.js';
import getGCD from '../utilities/gcd.js';
import randomNum from '../utilities/randomNum.js';

const description = 'Find the greatest common divisor of given numbers';

function gcd() {
  const num1 = randomNum(9);
  const num2 = randomNum(9);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));

  return [question, correctAnswer];
}

export default () => {
  run(description, gcd);
};
