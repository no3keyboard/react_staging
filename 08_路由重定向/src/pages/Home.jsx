import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h3>我是Home的内容</h3>
      {sum === 2 ? <Navigate to="/about"></Navigate> : <h3>当前sum的值是:{sum}</h3>}
      <button onClick={()=>setSum(2)}>点我sum变2</button>
    </div>
    
  )
}
