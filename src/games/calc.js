import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const min = 1;
const max = 100;
const countOperation = 3;
const startCountOperation = 0;
const description = 'What is the result of the expression?';

const generateGameData = () => {
  const firstNumber = getRandomNumber(min, max);
  const secondNumber = getRandomNumber(min, max);
  const signIndex = getRandomNumber(startCountOperation, countOperation);
  let pairQuestion;
  switch (signIndex) {
    case 0:
      pairQuestion = cons(`${firstNumber} + ${secondNumber}`, (firstNumber + secondNumber).toString());
      break;
    case 1:
      pairQuestion = cons(`${firstNumber} - ${secondNumber}`, (firstNumber - secondNumber).toString());
      break;
    case 2:
      pairQuestion = cons(`${firstNumber} * ${secondNumber}`, (firstNumber * secondNumber).toString());
      break;
    default:
  }
  return pairQuestion;
};

const startGame = () => {
  gameTemplate(generateGameData, description);
};

export default startGame;
