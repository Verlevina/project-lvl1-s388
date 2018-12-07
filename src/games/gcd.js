import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const min = 1;
const max = 100;
const description = 'Find the greatest common divisor of given numbers.';

const findgcd = (firstNumber, secondNumber) => {
  const minNumber = Math.min(firstNumber, secondNumber);
  let gcd;
  for (let i = minNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i.toString();
      break;
    }
  }
  return gcd;
};

const generateGameData = () => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const question = ` ${firstNumber} ${secondNumber}`;
  const trueAnswer = findgcd(firstNumber, secondNumber);
  return cons(question, trueAnswer);
};

export default () => gameTemplate(generateGameData, description);
