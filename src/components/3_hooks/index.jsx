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
