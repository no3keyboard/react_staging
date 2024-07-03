import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "114", title: "消息1", content: "哼啊啊啊啊" },
    { id: "514", title: "消息2", content: "原神原神原神" },
    { id: "1919", title: "消息3", content: "不如原神" },
    { id: "810", title: "消息4", content: "画质。。" },
  ]);

  const navigate = useNavigate()

  function showDetail(m){
    navigate('detail',{
        replace:'false',
        state:{
            id:m.id,
            title:m.title,
            content:m.content
        }
    })
  }
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link to='detail'
              state={{
                id:m.id,
                title:m.title,
                content:m.content,
              }}>
                {m.title}
              </Link>
              <button onClick={()=>showDetail(m)}>点击跳跃</button>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
