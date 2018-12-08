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
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === questionPosition) {
      answer = (startProgression + step * i).toString();
      question += ' .. ';
    } else {
      question += ` ${startProgression + step * i} `;
    }
  }
  return cons(question, answer);
};

const startGame = () => {
  gameTemplate(generateGameData, description);
};

export default startGame;
