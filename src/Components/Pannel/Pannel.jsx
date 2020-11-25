import React from 'react'

import Main from '../Main/Main'
import Title from '../Title/Title'
import LeadsTable from '../LeadsTable/LeadsTable'

import {
} from "./Pannel.module.css";

const Pannel = () => {
  return (
    <Main >
      <Title>Leads Table</Title>
      <LeadsTable />
    </Main>
  )
}

export default Pannel
