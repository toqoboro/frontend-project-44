import getRandomNum from './random.js';
import gamestarter from '../index.js';

const rule = 'What is the result of the expression?';

const rangemin = 1;
const rangemax = 100;
const operators = ['+', '-', '*'];
const getRandomOperator = (oper) => Math.floor(Math.random() * oper.length);

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const game = () => {
  const num1 = getRandomNum(rangemin, rangemax);
  const num2 = getRandomNum(rangemin, rangemax);
  const operator = operators[getRandomOperator(operators)];
  const Quest = `${num1} ${operator} ${num2}`;
  const correctanswer = calculate(num1, num2, operator).toString();
  return [correctanswer, Quest];
};

const gamestartercalc = () => {
  gamestarter(game, rule);
};

export default gamestartercalc;
