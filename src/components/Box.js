import React from 'react';

export default function Box(props) {  
    
 const changeColor = ()=>{
     props.updateColorValue(props.rowIndex, props.colIndex);
     
 }
 
 const first = () => {
   props.setFirstValue(props.rowIndex, props.colIndex)
 }
 
  return (
      <>
       <div style={(props.colorValue === 1)? ({backgroundColor:"red"}):{backgroundColor:"green"}} className="box" draggable onDragStart={first} onDragEnd={props.reset}  onDragOver={changeColor}   ></div>
       
</>
  )
}
