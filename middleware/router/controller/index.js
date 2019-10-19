var request = require('request');
var getIndex = require('../../model/index.js');

function index(req,res){
    if(global.cache.index){
        res.end(global.cache.index);            //有缓存的话直接返回缓存；从内存中拿数据
    }else{
        getIndex().then(function(data){
            global.cache.index = res.render();  //没有缓存的情况下；重新渲染并且更新缓存
            res.render('index.art',data);       //传入到模板并且传入data去渲染这个模板
        }).catch((err)=>{
            console.log(err);
        })
    }
    
}

module.exports = index;