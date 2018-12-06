import gameTemplate from '../game-template';
import getRandomNumbers from '../random-numbers';
import readlineSync from "readline-sync";
const MIN = 1;
const MAX = 100;
const levelCount = 3;
const calcGameDescription = 'What is the result of the expression?';

const calcLevel = () => {
  const first = getRandomNumbers(MIN, MAX)
};