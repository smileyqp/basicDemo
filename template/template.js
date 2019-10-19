(function(root){

    function extend(){
        var target = arguments[0] || {};
        var len = arguments.length;
        var key,options,i = 1;      //变量初始的值i从1开始；因为第一个传入的是target，从第二个开始遍历即templateSettings和settings这两个进行遍历
        if(typeof target != 'object'){return {};}
        for(;i < len;i++){
            if((options = arguments[i]) != null){
                for(key in options){
                    console.log(key)
                    target[key] = options[key];
                }
            }
        }
        return target;
    } 






    //默认配置解析规则
    var templateSettings = {
        evalute:/<%([\s\S]+?)%>/g,         //逻辑代码的捕获
        interpolate:/<%=([\s\S]+?)%>/g,         //访问数据的捕获
        escape:/<%-([\s\S]+?)%>/g,         //逃逸字符的捕获
    }


    var template = function(text,settings){
        //settings是代表用户的配置
        //extend；(templateSettings)默认配置为优先，(settings)用户配置为替换的一种方案;扩展加上覆盖
        settings = extend({},templateSettings,settings);
        console.log(settings)
        //source是取得对应值之后将正则对象转化成字符串
        var matcher = new RegExp([
            settings.interpolate.source,
            settings.escape.source,
            settings.evalute.source
        ].join('|'),'g');   //将上面的由正则对象转换承德字符串的数组组合起来用逻辑或分割；逻辑或代表模式;其中g代表全局匹配
        console.log(matcher)//模板字符串
        text.replace(matcher,function(match,interpolate,escape,evalute){
            console.log(match)
            
            console.log(interpolate)
            console.log(escape)
            console.log(evalute)
        });
    }
    root.template = template;
})(this);