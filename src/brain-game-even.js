import readlineSync from 'readline-sync';
import greeting from '.';
import welcome from './welcome.js';
const MIN = 1;
const MAX = 100;
const LEVEL_COUNT = 3;
console.log(`Answer "yes" if number even otherwise answer "no".`);

welcome();

const userName = greeting();

const getRandomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = number => {
  return (number % 2 === 0);
};

const level = () => {
  const number = getRandomNumbers(MIN, MAX);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const realResult = isEven(number);
  const realAnswer = realResult ? 'yes' : 'no';
  console.log( (realAnswer === userAnswer) ? 'Correct!' : `${userAnswer} is wrong answer ;(. Correct answer was '${realAnswer}'.
Let's try again, ${userName}!`);
  return realAnswer === userAnswer;
};


const game = () => {
  let resultArray = [];
  for (let i = 0; i < LEVEL_COUNT; i++) {
    resultArray.push(level());
  }
  if(resultArray.every(arg => arg)) {
    console.log(`Congratulations, ${userName}!`)
  }

};

export default game;