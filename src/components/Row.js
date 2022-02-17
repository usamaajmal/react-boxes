import React from 'react'
import Box from './Box'

export default function Row(props) {

  return (
    <div className='row'>

        {
            props.row && props.row.map((e,i)=>{
               return  <Box key={i} rowIndex={props.rowIndex} colorValue={props.row[i] } colIndex={i} {...props}/> 
                
            })
        }
     
  </div>  
  )
}
