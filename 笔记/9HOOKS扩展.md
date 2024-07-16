# 9HOOKS扩展

### setState

![image-20240708180224347](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240708180224347.png)

异步更新状态 VUE是同步

使用setState的回调

```react
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count:0}

  add = () =>{
    //对象式
    //获取原来count
    let {count} = this.state
    //更新
    // this.setState({count:++count},()=>{
    //   console.log('this.state.count :>> ', this.state.count);
    // })
    //函数式 不需要获取
    this.setState((state => ({count:++count})))
  }
  
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>加1</button>
      </div>
    )
  }
}

```

### lazyLoad

懒加载 Suspense const Home = lazy(()=>import('./Home'))

```react
// 创建"外壳"组件App
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
// import Home from "./Home";
// import About from "./About";
import Loading from "./Loading";

const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))
// 创建并暴露App组件
export default function Demo() {
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
                <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
```

### stateHook之useState

![image-20240708203501572](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240708203501572.png)

```react
import React from 'react'

export default function Demo() {

  const [count,setCount] = React.useState(0)
  const [name,setName] = React.useState('绝区零')

  function add(){
    // setCount(count+1)//不能写++count 第一种写法
    setCount((count) => {return count + 1})
  }

  function changName(){
    setName('原神')
  }

  return (
    <div>
      <h2>当前求和为：{count}</h2>
      <h2>当前玩：{name}</h2>
      <button onClick={add}>+1</button>
      <button onClick={changName}>改名</button>
    </div>
  )
}

```

### EffectHook之useEffect

类似componentDidMount + update但又不是

需要传入空数组才不会越调用越快 为Did 否则为update

```react
import React from 'react'

export default function Demo() {

  const [count,setCount] = React.useState(0)
//   const [name,setName] = React.useState('绝区零')

  React.useEffect(()=>{
    // 使用函数式更新，确保始终使用最新的 state
    const interval =  setInterval(()=>{
        setCount(count => count + 1)//略写return
    },1000)
    return () => clearInterval(interval);
  },[]) // 空数组依赖，确保只在挂载和卸载时运行

  function add(){
    // setCount(count+1)//不能写++count 第一种写法
    setCount((count) => {return count + 1})
  }

//   function changName(){
//     setName('原神')
//   }

  return (
    <div>
      <h2>当前求和为：{count}</h2>
      {/* <h2>当前玩：{name}</h2> */}
      <button onClick={add}>+1</button>
      {/* <button onClick={changName}>改名</button> */}
      <button>卸载组件</button>
    </div>
  )
}

```

类的写法

![image-20240708213947665](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240708213947665.png)

卸载组件

![image-20240708214540902](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240708214540902.png)

```react
import React from 'react'
import { createRoot } from 'react-dom/client'

export default function Demo() {

  const [count,setCount] = React.useState(0)
//   const [name,setName] = React.useState('绝区零')

  React.useEffect(()=>{
    // 使用函数式更新，确保始终使用最新的 state
    let interval =  setInterval(()=>{
        setCount(count => count + 1)//略写return
    },1000)
    return () => clearInterval(interval);
  },[]) // 空数组依赖，确保只在挂载和卸载时运行

  function add(){
    // setCount(count+1)//不能写++count 第一种写法
    setCount((count) => {return count + 1})
  }

//   function changName(){
//     setName('原神')
//   }

  function unmonut1(){
    const container = document.getElementById('root')
    const root = createRoot(container);
    root.unmount()
  }
  return (
    <div>
      <h2>当前求和为：{count}</h2>
      {/* <h2>当前玩：{name}</h2> */}
      <button onClick={add}>+1</button>
      {/* <button onClick={changName}>改名</button> */}
      <button onClick={unmonut1}>卸载组件</button>
    </div>
  )
}
```

### RefHook之useRef

![image-20240708215830900](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240708215830900.png)

```react
import React from 'react'
import { createRoot } from 'react-dom/client'

export default function Demo() {

  const [count,setCount] = React.useState(0)
//   const [name,setName] = React.useState('绝区零')
  const myRef = React.useRef()

  React.useEffect(()=>{
    // 使用函数式更新，确保始终使用最新的 state
    let interval =  setInterval(()=>{
        setCount(count => count + 1)//略写return
    },1000)
    return () => clearInterval(interval);
  },[]) // 空数组依赖，确保只在挂载和卸载时运行

  function add(){
    // setCount(count+1)//不能写++count 第一种写法
    setCount((count) => {return count + 1})
  }

//   function changName(){
//     setName('原神')
//   }

  function unmonut1(){
    const container = document.getElementById('root')
    const root = createRoot(container);
    root.unmount()
  }

  function show(){
    alert(myRef.current.value)
  }
  
  return (
    <div>
      <input type='text' ref = {myRef}></input>
      <h2>当前求和为：{count}</h2>
      {/* <h2>当前玩：{name}</h2> */}
      <button onClick={add}>+1</button>
      {/* <button onClick={changName}>改名</button> */}
      <button onClick={unmonut1}>卸载组件</button>
      <button onClick={show}>输出文本框</button>
    </div>
  )
} 
```

### Fargment

标签

类似空标签 但是Fargment可以写标签属性 key（只能key ）

### Context

向下传 redux是组件间 

![image-20240708234645913](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240708234645913.png)

谁声明谁使用  

子组件要声明接受

类组件

![image-20240709000349866](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240709000349866.png)

函数式

![image-20240709000620034](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240709000620034.png)

![image-20240709000555904](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240709000555904.png)

注意 应用开发中一般不用context 一般用来封装插件