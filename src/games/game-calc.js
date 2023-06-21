import rules from '../index.js';
import { name, getAnswerForQuestion } from '../cli.js';
import getRandomNum from '../utilities/randomNum.js';

// eslint-disable-next-line no-shadow
const greetingCalc = (rules) => {
  const operation = ['+', '-', '*'];

  function getOperation() {
    return operation[getRandomNum(2)];
  }

  function expression() {
    const randomNumber1 = getRandomNum(99);
    const randomNumber2 = getRandomNum(99);
    const operations = getOperation();
    const expressions = `${randomNumber1} ${operations} ${randomNumber2}`;
    // eslint-disable-next-line no-eval
    const rightAnswer = eval(expressions);
    console.log(`Question: ${expressions}`);
    const answers = getAnswerForQuestion('Your answer: ');
    rules.check({ rightAnswer, answers }, expression);
  }
  return {
    start() {
      console.log('What is the result of the expression?');
      expression();
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
  greetingCalc(gameRules).start();
};
export default launch;
