/* eslint-disable no-shadow */
import runProgression from '../index.js';
import getRandomNum from '../utilities/randomNum.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

function arithmeticsProgression() {
  let progressionNum = getRandomNum(0, 50);
  const stepProgression = getRandomNum(2, 5);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNum);
    progressionNum += stepProgression;
  }
  return progression;
}

function progress() {
  const progression = arithmeticsProgression();
  const randomIndex = getRandomNum(0, progressionLength);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

export default () => {
  runProgression(description, progress);
};
