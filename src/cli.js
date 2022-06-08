import readlineSync from 'readline-sync';

export default function startBlock () {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have yor name? ');
    console.log('Hello,' + name + '!');
}
