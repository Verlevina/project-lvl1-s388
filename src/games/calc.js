import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
const countOperation = 3;
const startCountOperation = 0;
const description = 'What is the result of the expression?';

const questionPairGenerate = () => {
  const firstNumber = getRandomNumber(MIN, MAX);
  const secondNumber = getRandomNumber(MIN, MAX);
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

export default () => gameTemplate(questionPairGenerate, description);
