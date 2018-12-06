import gameTemplate from '../game-template';
import getRandomNumbers from '../util';
import { cons } from 'hexlet-pairs';


const MIN = 1;
const MAX = 100;
const evenGameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const questionPairGenerate = () => {
  const question = getRandomNumbers(MIN, MAX);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default  () => gameTemplate(questionPairGenerate, evenGameDescription);


