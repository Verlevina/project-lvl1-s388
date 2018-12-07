import gameTemplate from '../game-template';
import agreeQuestionPairGenerate from '../agreeGameTemplate';

const min = 1;
const max = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const generateGameData = () => agreeQuestionPairGenerate(isEven, min, max);

export default () => gameTemplate(generateGameData, description);
