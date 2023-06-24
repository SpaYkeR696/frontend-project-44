/* eslint-disable indent */
import run from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function even() {
  const num = getRandomNum(99);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  return [num, correctAnswer];
}

export default () => {
  run(description, even);
};
