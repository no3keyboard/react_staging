import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class Search extends Component {

  search = async() => {
    //连续解构赋值 + 重命名
    const {searchWord:{value}} = this
    //发送请求前通知App更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    //发送请求前通知List更新状态
    PubSub.publish('114514',{isFirst:false,isLoading:true})
    // //使用axios发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${value}`).then(
    //     response => {
    //       // this.props.updateAppState({isLoading:false,users:response.data.items})
    //       PubSub.publish('114514',{isLoading:false,users:response.data.items})
    //     },
    //     error => {
    //       // this.props.updateAppState({isLoading:false,err:error.message})//注意要有message
    //       PubSub.publish('114514',{isLoading:false,err:error.message})
    //     }
    // )

    // // 使用fetch发送网络请求(优化版不写res之后的err，而是最后用catch写err)
    // fetch(`https://api.github.com/search/users?q=${value}`).then(
    //   response => {
    //     //只是联系服务器成功
    //     return response.json()
    //   }
    // ).then(
    //   //获取数据
    //   response => {}
    // ).catch(
    //   err => {console.log('err :>> ', err);}
    // )
    // ES8 async await 与 try catch
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = await response.json()
      PubSub.publish('114514',{isLoading:false,users:data.items})
    } catch (error) {
      console.log('error :>> ', error);
      PubSub.publish('114514',{isLoading:false,err:error.message})
    }
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
