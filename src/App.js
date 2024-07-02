//创建"外壳"组件App
import React from "react";
import './App.css'
import Search from "./components/Search";
import List from "./components/List";

//创建并暴露App组件
export default class App extends React.Component{

  state = {users:[]}//初始化状态

  saveUsers = (users)=>{
    this.setState({users})
  }

  render(){
    return (
      <div className="container">
        <Search saveUsers = {this.saveUsers}/>
        <List users = {this.state.users}/>
      </div>
    )
  }
}
