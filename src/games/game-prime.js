import { getAnswerForQuestion } from '../cli.js';
import getRandomNum from '../utilities/randomNum.js';
import prime from '../utilities/prime.js';

export default (rules) => {
  function isPrime() {
    const num = getRandomNum(7) + 2;
    const rightAnswer = prime(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answers = getAnswerForQuestion('Your answer: ');

    rules.check({ rightAnswer, answers }, isPrime);
  }

  return {
    start() {
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      isPrime();
    },
  };
};
