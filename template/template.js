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
        console.log('matcher:')
        console.log(matcher)//模板字符串

        var index = 0;      //切割的起点
        var source;
        text.replace(matcher,function(match,interpolate,escape,evalute,offset){//replace如果传入的是一个函数，那么每个匹配都会调用该函数；该函数的第一个参数是指匹配模式的字符串;后面穿进去的分别是相对应的模式;offset是指当前模板字符串与整个正则匹配的第一个下标值；也就是除了模板字符串之外的东西当遇到模板字符串后的第一个下编制
            // console.log('测试一下参数')
            // console.log(offset);//模板字符串开始匹配的第一个值的下表；"hello:<%if(xxx){} %>"中第一个匹配的是<,在整个字符串中第六位，因此这里的offset的值是6
            // console.log(match)
            
            // console.log(interpolate)
            // console.log(escape)
            // console.log(evalute)

            source = text.slice(index,offset);//拿到除了模板字符串之外的数据
            console.log(source)

            index = offset+match.length;//重置下次扫面起点；比如第一次是开始到第一次找到模板字符串；那么从0到offset就是没有匹配的部分，那么第一个模板字符串之后要找到第二个没有匹配的部分就要用第一次找到模板字符串的位置加上木板子妇产匹配到的长度，那么这就是第二次找到不是模板字符串的起点

            if(interpolate){

            }else if(escape){

            }else if(evalute){

            }
        });
        //模板引擎：依赖于植入字符串；通过字符串的拼接等方式来实现原本需要用js逻辑来实现的东西
        /**
         * 1、截取
         * 2、拼接
         * 3、组织逻辑
         * 4、渲染函数处理(解析)
         */
        var render = new Function('obj','with(obj){}');
        var template = function(data){
            return render.call(this,data)//绑定渲染函数的作用域；获取调用template的时候的data
        }
        return template;//返回template方法
    }
    root.template = template;
})(this);