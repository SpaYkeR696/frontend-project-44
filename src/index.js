export default () => {
  const MAX_FAIL_COUNT = 0;
  const MIN_SUCCESS_COUNT = 3;
  let userName = null;
  let successCount = 0;
  let failCount = 0;

  function reset() {
    successCount = 0;
    failCount = 0;
  }

  function finishWithLose() {
    console.log(`Let's try again , ${userName}`);
    reset();
  }

  function finishWithWin() {
    console.log(`Congratulation, ${userName}`);
    reset();
  }

  function check({ rightAnswer, answers }, cb) {
    if (answers === rightAnswer.toString()) {
      console.log('Correct!');
      successCount += 1;
    } else {
      console.log(`'${answers}' is wrong answer;(. Correct answer was '${rightAnswer}'.`);
      failCount += 1;
    }

    if (failCount > MAX_FAIL_COUNT) {
      finishWithLose();
    } else if (successCount >= MIN_SUCCESS_COUNT) {
      finishWithWin();
    } else {
      cb();
    }
  }

  return {
    userName,

    setUserName(name) {
      userName = name;
    },

    check({ rightAnswer, answers }, cb) {
      check({ rightAnswer, answers }, cb);
    },

    reset() {
      reset();
    },
  };
};
