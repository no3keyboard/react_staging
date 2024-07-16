import React from 'react'

export default function Demo() {
  const myContext = React.createContext()
  const {Provider,Consumer} = myContext
  return (
    <div>Demo</div>
  )
}
