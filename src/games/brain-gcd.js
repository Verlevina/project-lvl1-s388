import gameTemplate from '../game-template';
import getRandomNumbers from '../util';
import { cons } from 'hexlet-pairs';

const MIN = 1;
const MAX = 100;

const gcdGameDescription = 'Find the greatest common divisor of given numbers.';

const findCommonDivider = (firstNumber, secondNumber, count) => {
  if (firstNumber % count === 0 && secondNumber % count === 0) {
    return count.toString();
  } else {
    const newCount = count - 1;
    return findCommonDivider(firstNumber, secondNumber, newCount)
  }
};

const questionPairGenerate = () => {
  const firstNumber = getRandomNumbers(MIN, MAX);
  const secondNumber = getRandomNumbers(MIN, MAX);
  const question = ` ${firstNumber} ${secondNumber}`;
  const minNumber = (firstNumber < secondNumber) ? firstNumber : secondNumber;
  const trueAnswer = findCommonDivider(firstNumber, secondNumber, minNumber);
  return cons(question, trueAnswer);
};

const startGame = () => {
  gameTemplate(questionPairGenerate, gcdGameDescription);
};
export default startGame;