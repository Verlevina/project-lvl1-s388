import readlineSync from 'readline-sync';
import gameTemplate from '../game-template';
import getRandomNumbers from '../random-numbers';

const MIN = 1;
const MAX = 100;
const levelCount = 3;
const calcGameDescription = 'What is the result of the expression?';

const calcLevel = (userName) => {
  const firstNumber = getRandomNumbers(MIN, MAX);
  const secondNumber = getRandomNumbers(MIN, MAX);
  const question = ` ${firstNumber} + ${secondNumber}`;
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const realResult = firstNumber + secondNumber;
  if (+userAnswer === realResult) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${realResult}.
Let's try again, ${userName}!`);
  return false;
};
const startGame = () => {
  gameTemplate(levelCount, calcLevel, calcGameDescription);
};
export default startGame;
