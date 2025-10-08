import express from "express";

const port = 7000;
const app = express();

// this middleware will be called for each api call.
app.use((req, res, next) => {
  console.log('middleware')
  // if we didn't call next method then api will be hanged.
  next()
})

app.get('/',  (req, res) => {
  res.send('Home Page');
})

app.get('/test', (req, res) => {
  res.send('Test Page');
})

// --------------------------------------------------

// app.use((req, res, next) => {
//   console.log('middleware')
//   console.log(req.url)
//   console.log(req.route)
//   // res.end('middleware')
//   next()
// })

// app.get('/',  (req, res) => {
//   console.log('home ')
//   console.log(req.url)
//   res.send('Home Page');
// })

// app.get('/test', (req, res) => {
//   console.log('test')
//   console.log(req.url);
//   console.log(req.route)
//   res.send('Test Page');
// })

app.listen(port, () => {
  console.log(`server is ruuning http://localhost:${port}`);
})