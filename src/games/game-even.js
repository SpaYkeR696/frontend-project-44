/* eslint-disable indent */
import { getAnswerForQuestion } from '../cli.js';
import getRandomNum from '../utilities/randomNum.js';

export default (rules) => {
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
