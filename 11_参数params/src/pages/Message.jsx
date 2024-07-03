import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "114", title: "消息1", content: "哼啊啊啊啊" },
    { id: "514", title: "消息2", content: "原神原神原神" },
    { id: "1919", title: "消息3", content: "不如原神" },
    { id: "810", title: "消息4", content: "画质。。" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`detail/${m.id}/${m.title}/${m.content}`}>
                {m.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
