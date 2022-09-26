import readlineSync from 'readline-sync';

export default function even() {
  let finish;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const random = Math.round(Math.random() * 10);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes') && (random % 2 === 0)) {
      console.log('Correct!');
      finish = `Congratulations, ${userName}!`;
    } else if ((answer === 'no') && (random % 2 !== 0)) {
      console.log('Correct!');
      finish = `Congratulations, ${userName}!`;
    } else if ((answer !== 'no') && (random % 2 !== 0)) {
      finish = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`;
      break;
    } else if ((answer !== 'yes') && (random % 2 === 0)) {
      finish = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`;
      break;
    }
  } console.log(finish);
}
