export default (num) => {
  if (num > 0) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};
