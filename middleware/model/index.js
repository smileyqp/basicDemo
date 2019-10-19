//模型层发请求
var request = require('request');//node自身发请求太麻烦；于是引用第三方模块

async function index(){
    var getAllclassify = await new Promise(function(resolve,reject){
        request.get('http://localhost:3000/getAllclassify',function(err,reponse,request){       //异步
        resolve(JSON.parse(data));              //resolve出去就可以被getAllclassify拿到；但是注意这里拿到的十一个json对象;于是JSON.parse(data)
        })
    }); 


    var getIndexpic = await new Promise(function(resolve,reject){
        request.get('http://localhost:3000/getIndexpic',function(err,reponse,request){       //异步
        resolve(JSON.parse(data));              //resolve出去就可以被getAllclassify拿到；但是注意这里拿到的十一个json对象;于是JSON.parse(data)
        })
    }); 

    var getMore = await new Promise(function(resolve,reject){
        request.get('http://localhost:3000/getMore',function(err,reponse,request){       //异步
        resolve(JSON.parse(data));              //resolve出去就可以被getAllclassify拿到；但是注意这里拿到的十一个json对象;于是JSON.parse(data)
        })
    }); 

    var getHot = await new Promise(function(resolve,reject){
        request.get('http://localhost:3000/getHot',function(err,reponse,request){       //异步
        resolve(JSON.parse(data));              //resolve出去就可以被getAllclassify拿到；但是注意这里拿到的十一个json对象;于是JSON.parse(data)
        })
    }); 

    var getFloor = await new Promise(function(resolve,reject){
        request.get('http://localhost:3000/getFloor',function(err,reponse,request){       //异步
        resolve(JSON.parse(data));              //resolve出去就可以被getAllclassify拿到；但是注意这里拿到的十一个json对象;于是JSON.parse(data)
        })
    }); 
    

    return {
        getAllclassify:getAllclassify,
        getMore:getMore,
        getHot:getHot,
        getFloor:getFloor,
        getIndexpic:getIndexpic
    };
}


module.exports = index;



//async函数不论返回任何东西都会被包装成一个promise对象


