import { cons, car, cdr } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumbers from '../util';

const MIN = 1;
const MAX = 10;
const countOperation = 3;
const startCountOperation = 1;
const calcGameDescription = 'What is the result of the expression?';
const getSign = (num) => {
  let pair;
  switch (num) {
    case 1:
      pair = cons('+', (a, b) => a + b);
      break;
    case 2:
      pair = cons('-', (a, b) => a - b);
      break;
    case 3:
      pair = cons('*', (a, b) => a * b);
      break;
  }
  return pair;
};

const questionPairGenerate = () => {
  const firstNumber = getRandomNumbers(MIN, MAX);
  const secondNumber = getRandomNumbers(MIN, MAX);
  const randomNum = getRandomNumbers(startCountOperation, countOperation);
  const signPair = getSign(randomNum);
  const question = ` ${firstNumber} ${car(signPair)} ${secondNumber}`;
  const trueAnswer = ((cdr(signPair))(firstNumber, secondNumber)).toString();
  return cons(question, trueAnswer);
};

export default () => gameTemplate(questionPairGenerate, calcGameDescription);
