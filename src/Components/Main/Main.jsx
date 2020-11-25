import React from 'react'

import { main } from './Main.module.css'

const Main = ({ children, className }) => {
  return (
    <main className={`${main} ${className}`}>
      { children}
    </main>
  )
}

export default Main
