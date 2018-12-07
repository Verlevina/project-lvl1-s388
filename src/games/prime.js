import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const questionPairGenerate = () => {
  const question = getRandomNumber(MIN, MAX);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => gameTemplate(questionPairGenerate, description);
