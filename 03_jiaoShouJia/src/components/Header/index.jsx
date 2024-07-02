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
