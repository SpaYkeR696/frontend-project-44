/* eslint-disable indent */
import rules from '../index.js';
import { name, getAnswerForQuestion } from '../cli.js';
import getRandomNum from '../utilities/randomNum.js';

// eslint-disable-next-line no-shadow
const greetingEven = (rules) => {
    const answer = {
        YES: 'yes',
        NO: 'no',
    };

    function next() {
        const num = getRandomNum(99);
        const rightAnswer = num % 2 === 0 ? answer.YES : answer.NO;
        console.log(`Question: ${num}`);
        const answers = getAnswerForQuestion('Your answer:');
        rules.check({ rightAnswer, answers }, next);
    }

    return {
        start() {
          // eslint-disable-next-line indent
          console.log('Answer "yes" if the number is even, otherwise answer "no".');
          next();
        },
      };
};

const run = () => {
  console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);

const gameRules = rules();
gameRules.setUserName(userName);
gameRules.reset();
greetingEven(gameRules).start();
};
export default run;
