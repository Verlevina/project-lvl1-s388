import gameTemplate from '../game-template';
import agreeQuestionPairGenerate from '../agreeGameTemplate';

const MIN = 1;
const MAX = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const questionPairGenerate = () => agreeQuestionPairGenerate(isEven, MIN, MAX);

export default () => gameTemplate(questionPairGenerate, description);
