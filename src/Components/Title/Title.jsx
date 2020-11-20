import React from 'react'

import { title } from './Title.module.css'

const Title = ( { children , className , ...props } ) => {
  return (
    <h2 className={`${title} ${className}`}>
      { children }
    </h2>
  )
}

export default Title
