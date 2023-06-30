import runPrime from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

function isPrime(num) {
  if (num > 0) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function prime() {
  const question = getRandomNum(1, 20);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  runPrime(description, prime);
};
