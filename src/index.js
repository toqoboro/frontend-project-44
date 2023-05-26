import readlineSync from 'readline-sync';

const round = 3;

const gamestarter = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rule);
  for (let i = 0; i < round; i += 1) {
    const [rightAnswer, Quest] = game();
    console.log(`Question: ${Quest}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default gamestarter;
