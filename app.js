import express from "express";

// console.log(express);
const port = 7000;
const app = express();
// console.log(app);

app.disable('x-powered-by')

app.get('/', (req, res) => {
  // res.setHeader();
  res.end('hello world !!!!');
  // res.send('Hello World !!');
})

app.listen(port, () => {
  console.log(`server is ruuning on port ;; ${port}`);
})