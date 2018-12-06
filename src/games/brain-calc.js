import gameTemplate from '../game-template';
import getRandomNumbers from '../util';
import { cons } from 'hexlet-pairs';

const MIN = 1;
const MAX = 100;
const calcGameDescription = 'What is the result of the expression?';


const questionPairGenerate = () => {
  const firstNumber = getRandomNumbers(MIN, MAX);
  const secondNumber = getRandomNumbers(MIN, MAX);
  const question = ` ${firstNumber} + ${secondNumber}`;
  const trueAnswer = (firstNumber + secondNumber).toString();
  return cons(question, trueAnswer);
};

const startGame = () => {
  gameTemplate(questionPairGenerate, calcGameDescription);
};
export default startGame;
