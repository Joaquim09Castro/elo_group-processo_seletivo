import React from 'react'

import { ReactComponent as Image404 } from '../../Image/404.svg';

import Main from '../Main/Main'
import Title from '../Title/Title'

import {
  title,
  messageContainer,
  messageText,
  messageImage
} from './Page404.module.css'

const Page404 = () => {
  return (
    <Main>
      <Title className={title}>404</Title>
      
      <div className={messageContainer}>
        <h1 className={messageText}>Page not found</h1>
        <Image404 className={messageImage}/>
      </div>
    </Main>
  )
}

export default Page404