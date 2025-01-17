import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    //连续解构赋值 + 重命名
    const {searchWord:{value}} = this
    //发送请求前通知App更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    //发送请求前通知List更新状态
    PubSub.publish('114514',{isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
        response => {
          // this.props.updateAppState({isLoading:false,users:response.data.items})
          PubSub.publish('114514',{isLoading:false,users:response.data.items})
        },
        error => {
          // this.props.updateAppState({isLoading:false,err:error.message})//注意要有message
          PubSub.publish('114514',{isLoading:false,err:error.message})
        }
    )
  }
    
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={c => this.searchWord = c} type="text" placeholder="输入用户名"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
