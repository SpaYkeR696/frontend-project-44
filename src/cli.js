/* eslint-disable no-use-before-define */
import readlineSync from 'readline-sync';

export const name = () => getAnswerForQuestion('May I have your name? ');

export const getAnswerForQuestion = (question) => readlineSync.question(`${question}`);
