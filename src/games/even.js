import readlineSync from 'readline-sync';

export default function even() {
  let finish;
  let count = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const random = Math.round(Math.random() * 10);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes') && (random % 2 === 0)) {
      console.log('Correct!');
      count += 1;
      finish = `Congratulations, ${userName}!`;
    } else if ((answer === 'no') && (random % 2 !== 0)) {
      console.log('Correct!');
      count += 1;
      finish = `Congratulations, ${userName}!`;
    } else if ((answer !== 'no') && (random % 2 !== 0)) {
      finish = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`;
      count += 3;
    } else if ((answer !== 'yes') && (random % 2 === 0)) {
      finish = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`;
      count += 3;
    }
  } console.log(finish);
}
