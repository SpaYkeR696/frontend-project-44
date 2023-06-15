/* eslint-disable no-shadow */
import { getAnswerForQuestion } from '../cli.js';
import getRandomNum from '../utilities/randomNum.js';

export default (rules) => {
  function progression(first, base, last) {
    return [...Array(last)].map((_, i) => first + base * i);
  }

  function progressionByIndex(prog, index) {
    const p = [...prog];
    p[index] = '..';
    return p;
  }

  function progress() {
    const first = getRandomNum(19);
    const base = getRandomNum(5) + 1;
    const last = getRandomNum(5) + 5;
    const progressions = progression(first, base, last);
    const rightAnswerIndex = getRandomNum(last - 1);
    const rightAnswer = progressions[rightAnswerIndex];
    const progShow = progressionByIndex(progressions, rightAnswerIndex).join(' ');
    console.log(`Question: ${progShow}`);
    const answers = getAnswerForQuestion('Your answer: ');

    rules.check({ rightAnswer, answers }, progress);
  }
  return {
    start() {
      console.log('What number is missing in the progression?');
      progress();
    },
  };
};
