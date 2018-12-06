import readlineSync from 'readline-sync';
import { greeting, welcome } from './welcome';
import { car, cdr } from 'hexlet-pairs';

const LEVEL_COUNT = 3;

const levelTemplate = (userName, questionPairGenerate) => {
  const questionPair = questionPairGenerate();
  console.log(`Question: ${car(questionPair)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === cdr(questionPair)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questionPair)}'. Let's try again, ${userName}!`);
  return false;
};

const level = (count, questionPairGenerate, userName) => {
  if (!count) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  const result = levelTemplate(userName, questionPairGenerate);
  if (result) {
    const count1 = count - 1;
    return level(count1, questionPairGenerate, userName);
  }
  return false;
};

const gameTemplate = (questionPairGenerate, gameDescription) => {
  welcome();
  console.log(gameDescription);
  const userName = greeting();
  level(LEVEL_COUNT, questionPairGenerate, userName);
};
export default gameTemplate;
