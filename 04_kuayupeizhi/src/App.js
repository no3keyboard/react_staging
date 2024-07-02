//创建"外壳"组件App
import React from "react";
import axios from 'axios';


//创建并暴露App组件
export default class App extends React.Component{

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
  render(){
    const {todos} = this.state
    return (
      <div>
        <button onClick={this.gestuData}>点击获取学生数据</button>
      </div>
    )
  }
}
