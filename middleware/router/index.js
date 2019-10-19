//路由模块
var express = require('express');
var router = express.Router();              //从express中拿出Router；路由中间件
var index = require('./controller/index.js');
router.get('/',index);

module.exports = router;
