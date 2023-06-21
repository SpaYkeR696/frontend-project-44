import rules from '../index.js';
import { name, getAnswerForQuestion } from '../cli.js';
import getGCD from '../utilities/gcd.js';
import randomNum from '../utilities/randomNum.js';

// eslint-disable-next-line no-shadow
const greetingGcd = (rules) => {
  function next() {
    const num1 = randomNum(9);
    const num2 = randomNum(9);
    const rightAnswer = getGCD(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
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

const launch = () => {
  console.log('Welcome to the Brain Games!');
  const userName = name();
  console.log(`Hello, ${userName}!`);

  const gameRules = rules();
  gameRules.setUserName(userName);
  gameRules.reset();
  greetingGcd(gameRules).start();
};
export default launch;
