import startBlock from './cli.js';
import { QUESTIONS_COUNT } from './constans.js';

export default function startGame(startQuestion, playGame) {
  const userName = startBlock();
  console.log(startQuestion);

  for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
    if (!playGame()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
