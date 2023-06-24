import run from '../index.js';
import getRandomNum from '../utilities/randomNum.js';
import prime from '../utilities/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

function isPrime() {
  const num = getRandomNum(7) + 2;
  const correctAnswer = prime(num) ? 'yes' : 'no';

  return [num, correctAnswer];
}

export default () => {
  run(description, isPrime);
};
