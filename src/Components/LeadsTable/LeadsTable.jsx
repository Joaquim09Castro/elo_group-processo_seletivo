import React from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import TableBody from './TableBody/TableBody'

import { drag , allowDrop , drop } from '../../Services/drag&DropPannelHandling'
import addLead from "../../Services/leadAdditionHandle"

import {
  container,
  dropdown,
  addLeadInput,
  addLeadButton,
  table,
  tableHeader,
  tableBody
} from "./LeadsTable.module.css";

const LeadsTable = () => {
  const [ remountCount , setRemountCount ] = React.useState(0);

  const [ leads , setLeads ] = React.useState( [
    { title: "Org. Internacionais" , state: 1 },
    { title: "Ind. Farm. LTDA" , state: 2 },
    { title: "Musc. Sound Live Cmp" , state: 1 }
  ] );
  const [ disableAddLead , setDisableAddLead ] = React.useState(true);

  const handleInputChange = ( event ) => {
    if ( event.target.value !== "" )
      setDisableAddLead( false );
  }

  const handleLeadAddition = ( event ) => {
    addLead(leads , setLeads , setDisableAddLead);
  }

  const handleDrag = ( event ) => {
    drag( event )
  }

  const handleDragOver = ( event ) => {
    allowDrop( event );
  }

  const handleDrop = ( event ) => {
    drop( event );
    setRemountCount(remountCount + 1);
  }

  return (
    <div className={container}>
      <DropdownButton
        id="dropdown-add-lead"
        className={dropdown}
        title="New Leed (+)"
      >
          <label htmlFor="lead-name">New Lead</label>
          <input
            id="lead-name"
            className={addLeadInput}
            type="text"
            onChange={ handleInputChange }
          />
            <Button
              className={addLeadButton}
              variant="primary"
              onClick={ handleLeadAddition }
              disabled={ disableAddLead }
            >
            Add
            </Button>
      </DropdownButton>

      <Table
        variant="light"
        className={table}
      >
        <thead className={tableHeader}>
          <tr>
            <th>Potential Client</th>
            <th>Data Confimed</th>
            <th>Meeting Scheduled</th>
          </tr>
        </thead>
        <TableBody
          className={tableBody}
          value={[...leads]}
          onDragStart={ handleDrag }
          onDragOver={ handleDragOver }
          onDrop={ handleDrop }
        />
      </Table>
    </div>
  )
}

export default LeadsTable
