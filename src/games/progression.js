import { cons } from 'hexlet-pairs';
import gameTemplate from '../game-template';
import getRandomNumber from '../utils';

const min = 1;
const max = 100;
const progressionLength = 10;
const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const startProgression = getRandomNumber(min, max);
  const questionPosition = getRandomNumber(0, progressionLength);
  const step = getRandomNumber(min, max);
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

export default () => gameTemplate(generateGameData, description);
