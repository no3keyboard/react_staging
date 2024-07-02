import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component {

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }//初始化状态

  componentDidMount(){
    this.token = PubSub.subscribe('114514',(_,stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字搜索</h2> :
          isLoading ? <h2>Loading......</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=>{
            return(
              <div key={userObj.id}  className="card">
                <a href={userObj.html_url} target="_blank" rel='noreferrer'>
                  <img src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
