import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete,reminder}) => {
  return (
    //We can even toggle the classNames. Remember the syntax.
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>reminder(task.id)}>
      <h3>
        {task.text} 
        <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
        </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
