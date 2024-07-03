// 创建"外壳"组件App
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route , Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

// 创建并暴露App组件
export default function App() {
  function highLight({isActive}){
    return isActive ? 'list-group-item at114514' : 'list-group-item'
  }
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 使用NavLink而不是a标签 */}
              <NavLink className={highLight} to="/about">About</NavLink>
              <NavLink className={highLight} to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About/>} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/" element={<Navigate to="/about"/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}