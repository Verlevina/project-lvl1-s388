import gameTemplate from '../game-template';
import agreeQuestionPairGenerate from '../agreeGameTemplate';

const min = 1;
const max = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => agreeQuestionPairGenerate(isPrime, min, max);

export default () => gameTemplate(generateGameData, description);
