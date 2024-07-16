![image-20240701215425957](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240701215425957.png)

拆组件 写CSS 写出静态页面

### 动态

 兄弟组件传数据 子传父 父子用props传

子组件想给父传 

通过调用父原来有的函数传

随机数 UUID ，轻量化 nanoi  d

![image-20240702150717026](https://zxxtypora.oss-cn-shenzhen.aliyuncs.com/img/image-20240702150717026.png)

App.js

```react
//创建"外壳"组件App
import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

//创建并暴露App组件
export default class App extends React.Component{
  //状态在哪，操作状态的方法就在哪

  //初始化
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'原神',done:true},
    {id:'003',name:'写代码',done:false},
  ]}

  //添加Todo
  addTodo = todoObj =>{
    //获取原todos
    const {todos} = this.state
    //追加todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos});
  }

  //更新选取状态todo
  updateTodo = (id,done) => {
    //获取状态中的todos
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}//等于done:done
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //删除一个todo
  deleteTodo = (id) => {
    const {todos} = this.state
    //删除
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  //是否全选
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  //清除已完成
  claerAllDone = ()=>{
    const {todos} = this.state
    const newTodos =  todos.filter(todoObj => {
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state
    return (
      <div>
        <Header addTodo = {this.addTodo}/>
        <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
        <Footer todos = {todos} checkAllTodo = {this.checkAllTodo} claerAllDone = {this.claerAllDone}/>
      </div>
    )
  }
}

```

footer.jsx

```react
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  isSelectALL = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }


  claerAllSelected = ()=>{
    this.props.claerAllDone()
  }

  render() {
    const {todos} = this.props
    //完成个数
    const countDone = todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
    //总数
    const total = todos.length

    return (
      <div className='todo-footer'>
        <label htmlFor="">
          <input onChange={this.isSelectALL} type="checkbox"  checked={countDone === total && total !== 0 ?true:false }/>
        </label>
        <span>
          <span>已完成{countDone}</span> / 全部{todos.length}
        </span>
        <button onClick={this.claerAllSelected} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
```

header.jsx

```react
import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  //限制接收类型
  static propTypes = {
    addTodo:Proptypes.func.isRequired//限制为函数func
  }

  //键盘事件
  handlekeyup = (event) => {
    const {target,key} = event
    //判断回车
    if(key !== 'Enter') return
    //判断这个输入是否空
    if(target.value.trim() === ''){
      alert('输入不能为空')
      return
    }
    //准备好todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    console.log('e :>> ', target.value);
    //todoObj传给App
    this.props.addTodo(todoObj)
    //清空
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handlekeyup} type='text' placeholder='输入任务名，回车确认' ></input>
      </div>
    )
  }
}
```

item.jsx

```react
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  //鼠标移入
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }

  //勾选
  handleCheck = (id)=>{
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete = (id)=>{
    if(window.confirm('确定删除吗？亲')){
      this.props.deleteTodo(id)
    }
    
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type='checkbox' checked={done} onChange={this.handleCheck(id)}></input>
          <span>{name}</span>
        </label>
                {/*用这种方法上面函数就可以不用高阶函数*/}
        <button onClick={()=>this.handleDelete(id)} className='btn btn-danger' style={{display:mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}

```

list.jsx

```react
import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    //限制接收类型
    static propTypes = {
      todos:Proptypes.array.isRequired,//限制为数组
      updateTodo:Proptypes.func.isRequired,//限制为函数func
      deleteTodo:Proptypes.func.isRequired
    }

  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodo = {updateTodo} deleteTodo = {deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
```

