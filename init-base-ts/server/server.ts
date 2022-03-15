import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 8888;

// 允许跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.put('/api/upload', (req: any, res, next) => {
  // TODO: 处理头像
  console.log('file: ', req.file)
  return res.status(200).json({ code: 0, data: { avatorPath: '/avators/111.png' } })
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
