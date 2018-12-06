import gameTemplate from '../game-template';
import getRandomNumbers from '../random-numbers';
import readlineSync from "readline-sync";
const MIN = 1;
const MAX = 100;
const levelCount = 3;
const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => (number % 2 === 0);
const evenLevel = (userName) => {
  const question = getRandomNumbers(MIN, MAX);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const realResult = isEven(question);
  const realAnswer = realResult ? 'yes' : 'no';
  if(userAnswer === realAnswer) {
    return true;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${realAnswer}'.
Let's try again, ${userName}!`);
    return false;
  }
};
const startGame = () => {
  gameTemplate(levelCount, evenLevel, evenGameDescription);
};
export default startGame;