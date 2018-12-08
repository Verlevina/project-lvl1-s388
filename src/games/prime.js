import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const min = -2;
const max = 90;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  let i = 3;
  let flag = true;
  while (i <= Math.sqrt(number) && flag) {
    if (number % i === 0) {
      flag = false;
    } else {
      i += 2;
    }
  }
  return flag;
};

const generateGameData = () => {
  const question = getRandomNumber(min, max);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

const startGame = () => {
  gameTemplate(generateGameData, description);
};

export default startGame;
