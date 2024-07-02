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
