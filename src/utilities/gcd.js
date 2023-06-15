// eslint-disable-next-line no-unused-vars
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

export default gcd;
