import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { greeting, welcome } from './welcome';

const levelCount = 3;

const gameTemplate = (questionPairGenerate, gameDescription) => {
  welcome();
  console.log(gameDescription);
  const userName = greeting();

  for (let i = 0; i < levelCount; i += 1) {
    const questionPair = questionPairGenerate();
    const question = car(questionPair);
    const answer = cdr(questionPair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameTemplate;
