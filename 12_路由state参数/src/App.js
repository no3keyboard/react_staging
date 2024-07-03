// 创建"外壳"组件App
import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import routes from "./routes";

// 创建 RoutesWrapper 组件
function RoutesWrapper() {
  const element = useRoutes(routes);
  return element;
}

// 创建并暴露 App 组件
export default function App() {
  function highLight({ isActive }) {
    return isActive ? 'list-group-item at114514' : 'list-group-item';
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
              {/* 使用 NavLink 而不是 a 标签 */}
              <NavLink className={highLight} to="/about">About</NavLink>
              <NavLink className={highLight} to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <RoutesWrapper />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
