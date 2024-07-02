//创建"外壳"组件App
import React from "react";
import './App.css'
import Search from "./components/Search";
import List from "./components/List";

//创建并暴露App组件
export default class App extends React.Component{

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }//初始化状态

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render(){
    return (
      <div className="container">
        <Search updateAppState = {this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
