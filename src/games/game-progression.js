/* eslint-disable no-shadow */
import run from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'What number is missing in the progression?';

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
  const correctAnswer = String(progressions[rightAnswerIndex]);
  const question = progressionByIndex(progressions, rightAnswerIndex).join(' ');

  return [question, correctAnswer];
}

export default () => {
  run(description, progress);
};
