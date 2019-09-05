import path from 'path';
import express from 'express';

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "john", "lastName": "Noriega"},

    {"id": 2, "firstName": "josh", "lastName": "Noriega"}

  ])
});
const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});