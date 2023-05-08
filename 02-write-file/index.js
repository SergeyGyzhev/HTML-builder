const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const file = fs.createWriteStream('02-write-file\\output.txt', {flags: 'a'});

console.log('Введите текст для записи в файл. Для выхода наберите "exit" или нажмите Ctrl+C');
rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Завершение работы');
    process.exit(0);
  } else {
    file.write(input + '\n');
  }
});