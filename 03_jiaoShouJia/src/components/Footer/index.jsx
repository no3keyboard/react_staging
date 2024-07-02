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
