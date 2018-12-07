import { cons } from 'hexlet-pairs';
import getRandomNumber from './utils';

const agreeQuestionPairGenerate = (callback, MIN, MAX) => {
  const question = getRandomNumber(MIN, MAX);
  const trueAnswer = callback(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
export default agreeQuestionPairGenerate;
