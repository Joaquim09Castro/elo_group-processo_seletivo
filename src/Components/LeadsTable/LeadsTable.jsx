import React from 'react'

import Table from 'react-bootstrap/Table'

import TableBody from './TableBody/TableBody'

import { drag , allowDrop , drop } from '../../Services/drag&DropPannelHandling'

import {
  container,
  table,
  tableHeader,
  tableBody
} from "./LeadsTable.module.css";
import AddLeadsModal from './AddLeadsModal/AddLeadsModal'
import ShowInfoModal from './ShowInfoModal/ShowInfoModal';
import addLead from '../../Services/LeadsAddServices/leadAdditionHandle'

const LeadsTable = () => {
  const [ leads , setLeads ] = React.useState( Array );

  const [ infoModalShow, setInfoModalShow] = React.useState(false);
  const [ infoModalContent , setInfoModalContent] = React.useState({});

  const handleInfoModalHide = () => {
    setInfoModalShow(false);
  }

  const handleDoubleClick = ( event ) => {
    if(event.target.value !== "") {
      const idx = event.target.id.split('-')[1].split('_')[1];
      setInfoModalContent(leads[idx]);
      setInfoModalShow(true);
    }
  }

  const handleDrag = ( event ) => {
    drag( event )
  }

  const handleDragOver = ( event ) => {
    allowDrop( event );
  }

  const handleDrop = ( event ) => {
    drop( event , handleDoubleClick);
  }

  const handleOnSubmit = (event) => {
    const [
      name,
      phone,
      email,
      checkAll,
      rpaCheck,
      digitalProductsCheck,
      analyticsCheck,
      bpmCheck
    ] = event.nativeEvent.srcElement;

    if ( name.validity.valid && phone.validity.valid && email.validity.valid ){
      const newLead = addLead( [ name.value , phone.value , email.value ] , [ checkAll, rpaCheck, digitalProductsCheck, analyticsCheck, bpmCheck]);
      setLeads( [...leads, newLead])
    }
  }

  return (
    <div className={container}>
      <ShowInfoModal 
        values={infoModalContent}
        show={infoModalShow}
        onHide={handleInfoModalHide}
      />

      <AddLeadsModal 
        setleads={ [ leads , setLeads ] }
        onSubmit={ handleOnSubmit}
      />

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
          onDoubleClick={ handleDoubleClick }
          onDragStart={ handleDrag }
          onDragOver={ handleDragOver }
          onDrop={ handleDrop }
        />
      </Table>
    </div>
  )
}

export default LeadsTable
