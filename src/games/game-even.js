import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const questionPairGenerate = () => {
  const question = getRandomNumber(MIN, MAX);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => gameTemplate(questionPairGenerate, description);
