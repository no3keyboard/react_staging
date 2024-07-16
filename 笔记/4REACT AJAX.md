![image-20240702151248484](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240702151248484.png)

### 配置方法1 proxy

package.json 加一句 

```json
"proxy":"http://loaclhost:5000"
```

```react
  gestuData = () => {
    axios.get("http://loaclhost:5000").then(
      response => {console.log('成功 :>> ', response.data);},
      error => {console.log('失败 :>> ', error);}
    )
  }
```

![image-20240702162328276](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240702162328276.png)

### 配置方法2

src目录下必须创建setupProxy.js文件 会检测该文件名使用

```js
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
```

![image-20240702162409254](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240702162409254.png)

app.js

```react
  getStuData = () => {
    axios.get("http://loaclhost:5000/api1").then(
      response => {console.log('成功 :>> ', response.data);},
      error => {console.log('失败 :>> ', error);}
    )
  }
  getCarData = () => {
    axios.get("http://loaclhost:5001/api2").then(
      response => {console.log('成功 :>> ', response.data);},
      error => {console.log('失败 :>> ', error);}
    )
  }
```

