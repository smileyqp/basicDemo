const express = require('express');
const app = express();
const router = require('./router/index.js');
const BodyParser = require('body-parser');              //BodyParser用于更方便处理POST请求

app.use(BodyParser.urlencoded({extended:true}));            //2、设置中间件
app.use(BodyParser.json());

global.cache = {};

//启动模块调用路由模块；路由模块调用控制器；控制器响应数据
app.use('/',router);            //3、引入路由。在app.js中将router作为一个全局中间件才能生效

//4、设置配置，配置视图；模板引擎；静态资源目录等
app.engine('art',require('express-art-template'));          //使用art前端模板引擎
app.set('views','./views');                     //设置试图文件在哪个文件夹下面
app.use(express.static('./views/static'));          //设置静态资源目录


app.listen(3600);                                   //1、开启服务