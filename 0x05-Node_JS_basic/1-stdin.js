// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  }
});

process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
