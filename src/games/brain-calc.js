import { gameTemplate, levelTemplate } from '../game-template';
import getRandomNumbers from '../random-numbers';

const MIN = 1;
const MAX = 100;
const levelCount = 3;
const calcGameDescription = 'What is the result of the expression?';

const calcLevel = (userName) => {
  const firstNumber = getRandomNumbers(MIN, MAX);
  const secondNumber = getRandomNumbers(MIN, MAX);
  const question = ` ${firstNumber} + ${secondNumber}`;
  const trueAnswer = (firstNumber + secondNumber).toString();
  return levelTemplate(userName, question, trueAnswer);
};
const startGame = () => {
  gameTemplate(levelCount, calcLevel, calcGameDescription);
};
export default startGame;
