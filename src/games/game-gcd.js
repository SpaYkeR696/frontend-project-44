import { getAnswerForQuestion } from '../cli.js';
import getGCD from '../utilities/gcd.js';
import randomNum from '../utilities/randomNum.js';

export default (rules) => {
  function next() {
    const num1 = randomNum(9);
    const num2 = randomNum(9);
    const rightAnswer = getGCD(num1, num2);
    console.log(`Question: ${num1}, ${num2}`);
    const answers = getAnswerForQuestion('Your answer: ');

    rules.check({ rightAnswer, answers }, next);
  }

  return {
    start() {
      console.log('Find the greatest common divisor of given numbers.');
      next();
    },
  };
};
