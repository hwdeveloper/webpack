//引入express模块
var express = require('express');
//获得express对象
var app = express();
//获得body-parser模块
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//指定模板引擎
app.set("view engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');
//静态文件
app.use(express.static('public'));

app.get('/index', function (req, res) {
    res.render('index',{});

})

var server = app.listen(8888);