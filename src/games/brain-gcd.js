import getRandomNum from '../random.js';
import gamestarter from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const rangemin = 1;
const rangemax = 100;

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const num1 = getRandomNum(rangemin, rangemax);
  const num2 = getRandomNum(rangemin, rangemax);
  const Quest = `${num1} ${num2}`;
  const correctanswer = gcd(num1, num2).toString();
  return [correctanswer, Quest];
};

const gamestartergcd = () => {
  gamestarter(game, rule);
};

export default gamestartergcd;