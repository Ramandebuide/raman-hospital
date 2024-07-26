import React from 'react'
import '../../App.css'
interface ButtonProps{
    name:string;
    getRoomDetails(str:string):void
}

const RoomButton = (props:ButtonProps) => {
  return (
    <div className='customButton'>
      <button  data-testid="button" onClick={()=>props.getRoomDetails(props.name)}>{props.name}</button>
    </div>
  )
}

export default RoomButton;
