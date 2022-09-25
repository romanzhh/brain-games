import readlineSync from 'readline-sync';

function numbersGcd(num1, num2) {
  const result = [];
  const min = Math.min(num1, num2);
  for (let i = 1; i <= min; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result.push(i);
    }
  } return result[result.length - 1];
}

function gcd() {
  let finish;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.round(Math.random() * 147);
    const number2 = Math.round(Math.random() * 133);
    const questionAnswer = numbersGcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === questionAnswer) {
      console.log('Correct!');
      finish = `Congratulations, ${userName}!`;
    } else if (Number(answer) !== questionAnswer) {
      finish = `'${answer}' is wrong answer ;(. Correct answer was '${questionAnswer}'. \nLet's try again, ${userName}!`;
      break;
    }
  } console.log(finish);
}

export { gcd, numbersGcd };
