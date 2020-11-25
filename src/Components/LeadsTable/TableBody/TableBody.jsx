import React from 'react'

import {
  body
} from './TableBody.module.css'

const TableBody = ({ onDragStart, onDragOver, onDrop, value: leads, onDoubleClick: handleDoubleClick, ...props }) => {
  return (
    <tbody className={body}>
      { leads.length > 0 ?
        leads.map((lead, idx) => {
          return (
            <tr
              key={idx}
              id={idx}
              onDragStart={onDragStart}
            >
              <td
                id={`data_${1}-row_${idx}`}
                className="contentTd"
                onDoubleClick={handleDoubleClick}
                data-state="1"
                draggable={true}
                onDrop={onDrop}
                onDragOver={onDragOver}
              >
                {lead.title}
              </td>
              <td
                id={`data_${2}-row_${idx}`}
                data-state="2"
                draggable={false}
                onDrop={onDrop}
                onDragOver={onDragOver}
              >
              </td>
              <td
                id={`data_${3}-row_${idx}`}
                data-state="3"
                draggable={false}
                onDrop={onDrop}
                onDragOver={onDragOver}
              >
              </td>
            </tr>
          )
        }) :
        <>
          <tr>
            <td colSpan="3" >
              No leads
              <br />
              Please add one
            </td>
          </tr>
        </>
      }
    </tbody>
  )
}

export default TableBody
