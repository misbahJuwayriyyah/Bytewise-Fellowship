import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text,setText]=useState('');
    const currentDate = new Date();
    const [day,setDay]=useState(currentDate.toISOString().slice(0, 16)); //Date() to find the current Date and time
    //     Date(): Creates a new Date object with the current date and time.
    // toISOString(): Converts the date to a string in ISO 8601 format (yyyy-MM-ddTHH:mm:ss.sssZ).
    // slice(0, 16): Extracts the part of the string up to the minute, resulting in the desired format (yyyy-MM-ddThh:mm).
    const [reminder,setReminder]=useState(false);
  return (
    <form action="" className='add-form' onSubmit={(e)=>{e.preventDefault();
        onAdd({text,day,reminder});
        setText('');
        setDay(currentDate.toISOString().slice(0, 16));
        setReminder(false);}}> {/*onSubmit function goes with the form and not the submite button */}
        <div className="form-control">
            <label htmlFor="add">Task</label>
            <input type="text" name="add" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} required/> {/*It is used to keep track of when it is going to change */}
        </div>
        <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input type="datetime-local" name="day" placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check" >
            <label htmlFor="reminder">Reminder</label>
            <input type='checkbox' name="reminder" style={{marginRight:0,flex:'0 0 4%'}} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask
