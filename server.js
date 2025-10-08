import express from "express";

const port = 7000;
const app = express();


app.use("/", (req, res, next) => {
  console.log('first middleware')
  console.log("req.url: ", req.url)
  next()
})

app.use("/test", (req, res, next) => {
  console.log('second middleware')
  console.log("req.url: ", req.url)
  console.log("req.route ", req.route.path)
  next()
})

app.get('/',  (req, res) => {
  console.log('home API')
  console.log("req.url: ", req.url)
  console.log("req.route ", req.route.path)
  res.send('Home Page');
})

app.get('/test', (req, res) => {
  console.log('test API')
  console.log("req.url: ", req.url)
  console.log("req.route ", req.route.path)
  res.send('Test Page');
})

app.listen(port, () => {
  console.log(`server is ruuning http://localhost:${port}`);
})

