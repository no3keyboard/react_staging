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
