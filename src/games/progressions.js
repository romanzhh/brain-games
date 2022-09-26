import readlineSync from 'readline-sync';

function makeProgression() {
  const firstNumber = Math.round(Math.random() * 10);
  const diff = Math.round(Math.random() * 10);
  let result = firstNumber.toString();
  let nextNumber = Number(firstNumber) + Number(diff);
  for (let j = 0; j < 10; j += 1) {
    result = `${result} ${Number(nextNumber)}`;
    nextNumber += diff;
  }
  const randomIndex = Math.round(Math.random() * 9);
  const split = result.split(' ');
  split[randomIndex] = '..';
  const finalResult = split.join(' ');
  return finalResult;
}

function answerProgression(yourProgression) {
  const split = yourProgression.split(' ');
  if (split[0] === '..') {
    const rightx2 = Number(split[2]);
    const rightx1 = Number(split[1]);
    const diff2 = rightx2 - rightx1;
    const emptyFirst = rightx1 - diff2;
    return emptyFirst;
  }
  for (let i = 0; i < split.length; i += 1) {
    if (split[i] === '..') {
      const right = Number(split[i + 1]);
      const left = Number(split[i - 1]);
      const empty = (Number(right) + Number(left)) / 2;
      return empty;
    }
  } return 0;
}

function progression() {
  let finish;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression2 = makeProgression();
    console.log(`Question: ${progression2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === answerProgression(progression2).toString()) {
      console.log('Correct!');
      finish = `Congratulations, ${userName}!`;
    } else if (answer !== answerProgression(progression2).toString()) {
      finish = `'${answer}' is wrong answer ;(. Correct answer was '${answerProgression(progression2).toString()}'. \nLet's try again, ${userName}!`;
      break;
    }
  } console.log(finish);
}

export { progression, makeProgression, answerProgression };
