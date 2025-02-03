import express from 'express';
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
  const token = req.query.token;
  console.log({ token });
  res.sendStatus(200);
});

app.use(express.static('src/public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
