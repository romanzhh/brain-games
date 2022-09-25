import readlineSync from 'readline-sync';

function random(array) {
    const ran = Math.round(Math.random() * 2);
    return array[ran];
};

function answerExpression(expression) {
    const split = expression.split(' ');
    if (split.includes('+')) {
        return Number(split[0]) + Number(split[2]);
    } else if (split.includes('-')) {
        return Number(split[0]) - Number(split[2]);
    } else if (split.includes('*')) {
        return Number(split[0]) * Number(split[2]);
    }
};

function calc() {
    let finish;
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const number1 = Math.round(Math.random() * 35);
        const number2 = Math.round(Math.random() * 10);
        const expression = number1 + ' ' + random(['+', '-', '*']) + ' ' + number2;
        const expressionAnswer = answerExpression(expression);
        console.log(`Question: ${expression}`);
        const answer = readlineSync.question('Your answer: ');
        if (Number(answer) === expressionAnswer) {
            console.log('Correct!');
            finish = `Congratulations, ${userName}!`;
        } else if (answer !== (expressionAnswer)) {
            finish = `'${answer}' is wrong answer ;(. Correct answer was '${expressionAnswer}'. \nLet's try again, ${userName}!`;
            break;
        }
    } console.log(finish);
};

export { calc, random, answerExpression };

