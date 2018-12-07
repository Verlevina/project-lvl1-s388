import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const MIN = 1;
const MAX = 100;
const progressionLength = 10;
const description = 'What number is missing in the progression?';

const questionPairGenerate = () => {
  const startProgression = getRandomNumber(MIN, MAX);
  const questionPosition = getRandomNumber(0, progressionLength);
  const step = getRandomNumber(MIN, MAX);
  let question = '';
  let answer;
  let progressionValue = startProgression;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === questionPosition) {
      answer = progressionValue.toString();
      question += ' .. ';
    } else {
      question += ` ${progressionValue} `;
    }
    progressionValue += step;
  }
  return cons(question, answer);
};

export default () => gameTemplate(questionPairGenerate, description);
