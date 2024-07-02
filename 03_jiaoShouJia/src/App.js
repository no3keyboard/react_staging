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
