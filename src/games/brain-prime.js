import getRandomNum from '../random.js';
import gamestarter from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rangemin = 1;
const rangemax = 100;

const isprime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const number = getRandomNum(rangemin, rangemax);
  const correctanswer = isprime(number) ? 'yes' : 'no';
  const Quest = number;
  return [correctanswer, Quest];
};

const gamestarterprime = () => {
  gamestarter(game, rule);
};
export default gamestarterprime;