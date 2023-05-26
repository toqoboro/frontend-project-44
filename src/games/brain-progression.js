import getRandomNum from '../random.js';
import gamestarter from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const game = () => {
  const lengthprogression = getRandomNum(5, 10);
  const stepprogression = getRandomNum(1, 5);
  const startpoint = getRandomNum(1, 10);
  const finishpoint = getRandomNum(0, lengthprogression - 2);
  const progression = getProgression(startpoint, stepprogression, lengthprogression);
  const correctanswer = progression[finishpoint] ? progression[finishpoint].toString() : `ошибка ${progression}, ${finishpoint}`;
  progression.splice(finishpoint, 1, '..');
  const Quest = progression.join(' ');
  return [correctanswer, Quest];
};

const gamestarterprogression = () => {
  gamestarter(game, rule);
};
export default gamestarterprogression;