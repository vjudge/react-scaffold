const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8888

// 允许跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// API calls
app.put('/api/upload', (req, res) => {
  // TODO: 处理头像
  console.log('file: ', req.file)
  return res.status(200).json({ code: 0, data: { avatorPath: '/avators/111.png' } })
})

// Serve any static files
app.use(express.static(path.join(process.cwd(), './build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(process.cwd(), './build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
