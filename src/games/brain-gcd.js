import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
const description = 'Find the greatest common divisor of given numbers.';

const findgcd = (firstNumber, secondNumber, count = Math.min(firstNumber , secondNumber)) => {
  if (firstNumber % count === 0 && secondNumber % count === 0) {
    return count.toString();
  }
  const newCount = count - 1;
  return findgcd(firstNumber, secondNumber, newCount);
};

const questionPairGenerate = () => {
  const firstNumber = getRandomNumber(MIN, MAX);
  const secondNumber = getRandomNumber(MIN, MAX);
  const question = ` ${firstNumber} ${secondNumber}`;
  const trueAnswer = findgcd(firstNumber, secondNumber);
  return cons(question, trueAnswer);
};

export default () => gameTemplate(questionPairGenerate, description);
