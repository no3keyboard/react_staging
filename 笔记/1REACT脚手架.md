### 搭建

用webpack 

用来帮程序员

react提供的脚手架库 create-react-app

react + webpack + es6 + eslint 等

模块化 组件化 工程化 npm或者npx

```
npx creat-react-app 项目英文名字
```

配置文件

![image-20240701150505521](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701150505521.png)

npm和yarn都可以

![image-20240701150211132](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701150211132.png)

出现则成功

![image-20240701150343535](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701150343535.png)

### 项目结构

图标

![image-20240701152636037](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701152636037.png)

react页面永远只有一个--SPA
功能在组件 

![image-20240701152750399](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701152750399.png)

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!--路径-->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!--理想视口，移动端适配-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--移动端页签颜色，兼容性差-->
    <meta name="theme-color" content="#000000" />
    <!--浏览器读取的描述-->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!--苹果手机桌面图标-->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!--应用加壳在manifest文件-->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!--不支持js的时候的提示-->
    <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
  </body>
</html>
```

robots.txt
爬虫规则

index.js 创建组件 引入index.html

![image-20240701162857310](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701162857310.png)