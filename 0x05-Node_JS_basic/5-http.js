const http = require('http');
const db = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filename = process.argv[2];
    let msg = 'This is the list of our students\n';
    await db(filename)
      .then((data) => {
        msg += data;
        res.end(msg);
      })
      .catch((err) => {
        msg += err.message;
        res.end(msg);
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
