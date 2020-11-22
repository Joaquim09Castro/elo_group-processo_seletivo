import React from 'react'

import {
  body
} from './TableBody.module.css'

const TableBody = ({ onDragStart, onDragOver, onDrop, value: leads, ...props }) => {
  return (
    <tbody className={body}>
      {
        leads.map((lead, idx) => {
          if (lead.state === 1) {
            return (
              <tr
                key={idx}
                id={idx}
                onDragStart={onDragStart}
              >
                <td
                  id={`data_${1}-row_${idx}`}
                  className="contentTd"
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
          } else if (lead.state === 2) {
            return (
              <tr
                key={idx}
                id={idx}
                onDragStart={onDragStart}
              >
                <td
                  id={`data_${1}-row_${idx}`}
                  data-state="1"
                  draggable={false}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
                </td>
                <td
                  id={`data_${2}-row_${idx}`}
                  className="contentTd"
                  data-state="2"
                  draggable={true}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
                  {lead.title}
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
          } else {
            return (
              <tr
                key={idx}
                id={idx}
                onDragStart={onDragStart}
              >
                <td
                  id={`data_${1}-row_${idx}`}
                  data-state="1"
                  draggable={false}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
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
                  className="contentTd"
                  data-state="3"
                  draggable={true}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
                  {lead.title}
                </td>
              </tr>
            )
          }
        })
      }
    </tbody>
  )
}

export default TableBody
