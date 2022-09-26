import readlineSync from 'readline-sync';

function isPrime(number) {
  const result = [];
  const result2 = [];
  for (let i = 1; i <= number / 2; i += 1) {
    result.push(i);
  }
  for (let j = 0; j < result.length; j += 1) {
    if (number % result[j] === 0) {
      result2.push(result[j]);
    }
  }
  if (result2.length <= 1) {
    return true;
  } return false;
}

function prime() {
  let finish;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 60);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && isPrime(number)) {
      console.log('Correct!');
      finish = `Congratulations, ${userName}!`;
    } else if (answer === 'no' && !isPrime(number)) {
      console.log('Correct!');
      finish = `Congratulations, ${userName}!`;
    } else if (answer === 'yes' && !isPrime(number)) {
      finish = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`;
      break;
    } else if (answer === 'no' && isPrime(number)) {
      finish = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`;
      break;
    }
  } console.log(finish);
}

export { prime, isPrime };
