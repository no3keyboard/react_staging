### 基本结构

src里创建App.js index.js

public里 图标和 index.html

![image-20240701165802402](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701165802402.png)

```js
//创建"外壳"组件App
import React from "react";

class App extends React.Component{
  render(){
    return (
      <div>
        hello react! me
      </div>
    )
  }
}

//暴露App组件
export default App
```

一个组件一个文件夹 组件首字母大写 或者JSX 后缀  或者按公司要求

index.js

```js
//引入React核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom/client";
//引入App组件
import App from "./App";
//渲染App到页面 新版本需要createRoot再render
//ReactDOM.render(<App/>,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

App.js

```js
//创建"外壳"组件App
import React from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";

//创建并暴露App组件
export default class App extends React.Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REACT脚手架</title>
  <!--图标路径-->
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
</head>
<body>
  <div id = "root"></div>
</body>
</html>
```

组件

![image-20240701182249268](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701182249268.png)

### 样式模块化

防止CSS冲突

css前面加module

![image-20240701182505624](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701182505624.png)

### 插件安装 已安装

rcc类组件 rfc函数组件

### 组件化编码

1拆合理了
2静态组件
3动态组件
	初始化数据
		数据类型 数据名称 保存组件

​	交互

