// 创建"外壳"组件App
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
// import Home from "./Home";
// import About from "./About";
import Loading from "./Loading";

const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))
// 创建并暴露App组件
export default function Demo() {
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
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}