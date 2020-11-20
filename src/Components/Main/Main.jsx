import React from 'react'

import { main } from './Main.module.css'

const Main = ( { children } ) => {
  return (
    <main className={main}>
      { children }
    </main>
  )
}

export default Main
