import readlineSync from 'readline-sync';
import {greeting, welcome} from './welcome';

const level = (count, currentGame, userName) => {
  if (!count) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
    const result = currentGame(userName);
  if (result) {
    count -= 1;
    level(count, currentGame, userName);
  } else {
    return false;
  }
};

const gameTemplate = (count, currentGame, gameDescription) => {
  welcome();
  console.log(gameDescription);
  const userName = greeting();
  level(count, currentGame, userName);
};
export default gameTemplate;