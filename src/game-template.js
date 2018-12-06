import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { greeting, welcome } from './welcome';

const LEVEL_COUNT = 3;

const level = (count, questionPairGenerate, userName) => {
  if (!count) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  let result;

  const questionPair = questionPairGenerate();

  console.log(`Question: ${car(questionPair)}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === cdr(questionPair)) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questionPair)}'. Let's try again, ${userName}!`);
    result = false;
  }

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
