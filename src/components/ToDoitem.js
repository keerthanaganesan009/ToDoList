import React from 'react'

export const ToDoitem = (props) => {
  return (
    <div onClick={()=>props.deleteItem(props.id)}>
     <li>{props.text}</li>
    </div>
  )
}

export default ToDoitem;
