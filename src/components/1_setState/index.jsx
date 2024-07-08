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
