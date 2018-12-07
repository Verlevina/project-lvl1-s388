import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
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

const questionPairGenerate = () => {
  const firstNumber = getRandomNumber(MIN, MAX);
  const secondNumber = getRandomNumber(MIN, MAX);
  const question = ` ${firstNumber} ${secondNumber}`;
  const trueAnswer = findgcd(firstNumber, secondNumber);
  return cons(question, trueAnswer);
};

export default () => gameTemplate(questionPairGenerate, description);
