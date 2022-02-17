import React from 'react';

export default function Box(props) {  
    
 const changeColor = ()=>{
     props.updateColorValue(props.rowIndex, props.colIndex,1);
     
 }
 
  return (
      <>
       <div style={(props.colorValue === 1)? ({backgroundColor:"red"}):{backgroundColor:"green"}} className="box" draggable onDragEnd={props.reset}  onDragOver={changeColor}   ></div>
       
</>
  )
}
