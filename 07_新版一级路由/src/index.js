//引入React核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom/client";
//引入路由
import {BrowserRouter} from 'react-router-dom';
//引入App组件
import App from "./App";
//渲染App到页面 新版本需要createRoot再render
//ReactDOM.render(<App/>,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
