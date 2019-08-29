import express from 'express'
import path from 'path';
import open from 'open';

const port = 3001;
const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});