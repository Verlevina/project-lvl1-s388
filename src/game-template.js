import { greeting, welcome } from './welcome';
import readlineSync from "readline-sync";

const levelTemplate = (userName, question, trueAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === trueAnswer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${userName}!`);
    return false;
  }
};

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
export {gameTemplate, levelTemplate};
