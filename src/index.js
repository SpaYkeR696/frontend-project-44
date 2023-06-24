import readlineSync from 'readline-sync';

const rounds = 3;

export default (description, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${names}!`);

  console.log(description);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = getQuestion();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${names}!`);
      return;
    }
  }
  console.log(`Congratulations, ${names}!`);
};
