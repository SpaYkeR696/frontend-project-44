import rules from '../index.js';
// eslint-disable-next-line import/no-duplicates
import { getAnswerForQuestion } from '../cli.js';
// eslint-disable-next-line import/no-duplicates
import { name } from '../cli.js';
import getRandomNum from '../utilities/randomNum.js';
import prime from '../utilities/prime.js';

// eslint-disable-next-line no-shadow
const greetingPrime = (rules) => {
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

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const userName = name();
  console.log(`Hello, ${userName}!`);
  const gameRules = rules();
  gameRules.setUserName(userName);
  gameRules.reset();
  greetingPrime(gameRules).start();
};
export default greeting;
