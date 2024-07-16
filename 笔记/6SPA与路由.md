### SPA理解

![image-20240703155017395](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703155017395.png)

单页面多组件

### 路由理解

![image-20240703155718105](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703155718105.png)

![image-20240703155829074](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703155829074.png)

锚点跳转 herf = “#demo”  加#号

### REACT-router

![image-20240703161200869](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703161200869.png)

学的是react-router-dom的理解

### 直接学最新的6！！！

![image-20240703162238293](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703162238293.png)

  用函数式了

报错信息 `useRoutes() may be used only in the context of a <Router> component.` 通常表示你的 `Routes` 组件必须在 `Router` 组件内部使用。确保你正确地将整个路由设置放在 `BrowserRouter` 组件内。

下面是更新后的代码，确保 `Routes` 组件被包裹在 `BrowserRouter` 内：

```react
// 创建"外壳"组件App
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

// 创建并暴露App组件
export default function App() {
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 使用NavLink而不是a标签 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
```

### 重定向

navigate 

app.js

```react
// 创建"外壳"组件App
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route , Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

// 创建并暴露App组件
export default function App() {
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 使用NavLink而不是a标签 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<navigate to="/about"/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
```

home.jsx

```react
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
  
export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h3>我是Home的内容</h3>
      {sum === 2 ? <Navigate to="/about"></Navigate> : <h3>当前sum的值是:{sum}</h3>}
      <button onClick={()=>setSum(2)}>点我sum变2</button>
    </div>
    
  )
}
```

![image-20240703175915796](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703175915796.png)

  

### NavLink高亮

```react
// 创建"外壳"组件App
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route , Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

// 创建并暴露App组件
export default function App() {
  function highLight({isActive}){
    return isActive ? 'list-group-item at114514' : 'list-group-item'
  }
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 使用NavLink而不是a标签 */}
              <NavLink className={highLight} to="/about">About</NavLink>
              <NavLink className={highLight} to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About/>} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/" element={<Navigate to="/about"/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
```

style在index.html里

```html
<style>
    .at114514{
      background-color: pink;
      color: skyblue;
    }
</style>
```

### useRoutes路由表

```react
// 创建"外壳"组件App
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import routes from "./routes";

// 创建 RoutesWrapper 组件
function RoutesWrapper() {
  const element = useRoutes(routes);
  return element;
}

// 创建并暴露 App 组件
export default function App() {
  function highLight({ isActive }) {
    return isActive ? 'list-group-item at114514' : 'list-group-item';
  }

  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 使用 NavLink 而不是 a 标签 */}
              <NavLink className={highLight} to="/about">About</NavLink>
              <NavLink className={highLight} to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <RoutesWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

```

### 嵌套路由

home.jsx

```react
import React, { useState } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'

export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="message">Message</NavLink>
            </li>
          </ul>
          {/* 指定路由组件呈现的位置 */}
          <Outlet></Outlet>
        </div>
    </div>
    
  )
}

```

message.jsx

```react
import React from "react";

export default function Message() {
  return (
    <div>
      <ul>
        <li>
          <a href="/message1">message001</a>&nbsp;&nbsp;
        </li>
        <li>
          <a href="/message2">message002</a>&nbsp;&nbsp;
        </li>
        <li>
          <a href="/message/3">message003</a>&nbsp;&nbsp;
        </li>
      </ul>
    </div>
  );
}
```

news.jsx

```react
import React from "react";

export default function News() {
  return (
    <div>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    </div>
  );
}

```

路由

```js
import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import { Children } from "react"


export default [
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>,
      children:[
        {
            path:'news',
            element:<News/>
        },
        {
            path:'message',
            element:<Message/>
        },
      ]
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    },
 ]
```

### 路由参数

```react
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "114", title: "消息1", content: "哼啊啊啊啊" },
    { id: "514", title: "消息2", content: "原神原神原神" },
    { id: "1919", title: "消息3", content: "不如原神" },
    { id: "810", title: "消息4", content: "画质。。" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`detail/${m.id}/${m.title}/${m.content}`}>
                {m.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
```

```react
import React from "react";
import { useParams } from "react-router-dom";

export default function () {
  const {id,title,content} = useParams()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  );
}
```

```js
import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import { Children } from "react"
import Detail from "../pages/Detail"


export default [
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>,
      children:[
        {
            path:'news',
            element:<News/>
        },
        {
            path:'message',
            element:<Message/>,
            children:[{
                path:'detail/:id/:title/:content',
                element:<Detail/>
            }]
        },
      ]
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    },
]
```

### 路由search

太麻烦了不写了 感觉不如params 不需要占位

主要是有个setSearch方便更新

### state参数

不需要占位 最好用的一集

```react
import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function () {
  const {state:{id,title,content}} = useLocation()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  );
}
```

```react
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "114", title: "消息1", content: "哼啊啊啊啊" },
    { id: "514", title: "消息2", content: "原神原神原神" },
    { id: "1919", title: "消息3", content: "不如原神" },
    { id: "810", title: "消息4", content: "画质。。" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link to='detail'
              state={{
                id:m.id,
                title:m.title,
                content:m.content,
              }}>
                {m.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
```

### 路由导航 编程式

![image-20240703233315210](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703233315210.png)

```react
import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "114", title: "消息1", content: "哼啊啊啊啊" },
    { id: "514", title: "消息2", content: "原神原神原神" },
    { id: "1919", title: "消息3", content: "不如原神" },
    { id: "810", title: "消息4", content: "画质。。" },
  ]);

  const navigate = useNavigate()

  function showDetail(m){
    navigate('detail',{
        replace:'false',
        state:{
            id:m.id,
            title:m.title,
            content:m.content
        }
    })
  }
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link to='detail'
              state={{
                id:m.id,
                title:m.title,
                content:m.content,
              }}>
                {m.title}
              </Link>
              <button onClick={()=>showDetail(m)}>点击跳跃</button>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
```

### useInRouterContext

验证是否在路由中

### useNavigationType

![image-20240703233805573](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703233805573.png)

### useOutlet

![image-20240703233951224](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703233951224.png)

### useResolvePath()

![image-20240703234046943](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703234046943.png)

### 总结

![image-20240703235056556](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235056556.png)

![image-20240703235737552](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235737552.png)

![image-20240703235747476](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235747476.png)

![image-20240703235808748](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235808748.png)

![image-20240703235822960](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235822960.png)

![image-20240703235837765](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235837765.png)

![image-20240703235946469](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240703235946469.png)

![image-20240704000002045](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240704000002045.png)

![image-20240704000006585](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240704000006585.png)

![image-20240704000012881](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240704000012881.png)

![image-20240704000020734](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240704000020734.png)