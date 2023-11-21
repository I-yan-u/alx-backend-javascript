// Test usage of process
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const names = process.stdin.read();
  if (names) process.stdin.write(`Your name is: ${names}`);
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
