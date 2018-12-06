import { greeting, welcome } from './welcome';

const level = (count, currentGame, userName) => {
  if (!count) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  const result = currentGame(userName);
  if (result) {
    const count1 = count - 1;
    return level(count1, currentGame, userName);
  }
  return false;
};

const gameTemplate = (count, currentGame, gameDescription) => {
  welcome();
  console.log(gameDescription);
  const userName = greeting();
  level(count, currentGame, userName);
};
export default gameTemplate;
