import { getAnswerForQuestion } from '../cli.js';
import getGCD from '../utilities/gcd.js';
import randomNum from '../utilities/randomNum.js';

export default (rules) => {
  function next() {
    const number1 = randomNum(9);
    const number2 = randomNum(9);
    const rightAnswer = getGCD(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
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
