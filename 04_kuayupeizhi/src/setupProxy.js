const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{
            target:'http://localhost:5000',
            //控制服务器中收到请求头的Host的值
            changeOrigin:true,
            //重写请求路径 替换api1为空字符串
            pathRewirte:{'^/api1':''}
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewirte:{'^/api2':''}
        }),
    )
}