const express = require('express'); //설치한 express module을 불러와서 변수(express)에 담습니다.
const app = express(); // express를 실행하여 app object를 초기화 합니다.

app.get('/', function(req, res) {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});