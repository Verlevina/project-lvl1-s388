import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
const progressionLength = 10;
const description = 'What number is missing in the progression?';


const getPair = (progressionValue, questionPosition, step, answer, count = 0, question = '') => {
  let newAnswer = answer;
  let newQuestion = question;
  let newProgressionValue = progressionValue;
  if (count === progressionLength) {
    return cons(question, answer);
  }
  const newCount = count + 1;
  if (count === questionPosition) {
    newAnswer = progressionValue.toString();
    newQuestion += ' .. ';
  } else {
    newQuestion += ` ${progressionValue} `;
  }
  newProgressionValue += step;
  return getPair(newProgressionValue, questionPosition, step, newAnswer, newCount, newQuestion);
};

const questionPairGenerate = () => {
  const startProgression = getRandomNumber(MIN, MAX);
  const questionPosition = getRandomNumber(0, progressionLength);
  const step = getRandomNumber(MIN, MAX);
  return getPair(startProgression, questionPosition, step);
};

export default () => gameTemplate(questionPairGenerate, description);
