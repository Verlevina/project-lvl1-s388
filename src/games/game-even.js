import readlineSync from 'readline-sync';
import {gameTemplate, levelTemplate} from '../game-template';
import getRandomNumbers from '../random-numbers';

const MIN = 1;
const MAX = 100;
const levelCount = 3;
const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);
const realResult = (question) => {
  return isEven(question) ? 'yes' : 'no';
};
const evenLevel = (userName) => {
  const question = getRandomNumbers(MIN, MAX);
  const trueAnswer = realResult(question);
  return levelTemplate(userName, question, trueAnswer);
};
const startGame = () => {
  gameTemplate(levelCount, evenLevel, evenGameDescription);
};
export default startGame;
