//Array of objects
// const tasks=[
//     {
//       "id": 1,
//       "text": "Doctor Appointment",
//       "day": "July 10th at 2:30pm",
//       "reminder": true
//     },
//     {
//       "id": 2,
//       "text": "Team Meeting",
//       "day": "July 11th at 11:00am",
//       "reminder": true
//     },
//     {
//       "id": 3,
//       "text": "Grocery Shopping",
//       "day": "July 12th at 5:00pm",
//       "reminder": false
//     }
//   ]
// import {useState} from 'react'
import Task from './Task.js'
//The following way of using prop is called 'destructuring'
const Tasks = ({tasks, onDelete,reminder}) => {
    //We define the hooks inside the component.
    //if you wanna change any part of the state, you will use setTasks (to recreate it), it is because tasks (state) on its own is immutable so tasks.push() etc. will not work.
    // const[tasks,setTasks]=useState([
    //     {
    //       "id": 1,
    //       "text": "Doctor Appointment",
    //       "day": "July 10th at 2:30pm",
    //       "reminder": true
    //     },
    //     {
    //       "id": 2,
    //       "text": "Team Meeting",
    //       "day": "July 11th at 11:00am",
    //       "reminder": true
    //     },
    //     {
    //       "id": 3,
    //       "text": "Grocery Shopping",
    //       "day": "July 12th at 5:00pm",
    //       "reminder": false
    //     }
    //   ]
    //   );
  return (
    //forEach(),map(),filter()
    //Following is the example of spread (...)
//     setTasks([...tasks,{
//     "id": 4,
//     "text": "Yoga Class",
//     "day": "July 13th at 6:30am",
//     "reminder": true
//   }])
    <>
    {/*map() function is used over an array. It takes a function whose parameter is the item of array and that function can return anything. The map function in JavaScript takes each item in an array, applies a function to it, and returns a new array with the results.  */}
    {tasks.map((task)=>{
        return(
        <Task key={task.id} task={task} onDelete={onDelete} reminder={reminder}/>
        )})}
    {/*Warning: Each child in a list should have a unique "key" prop. Use the above method to get rid of the warning. Parent of the list should have a key prop.*/}
    </>
  )
}

export default Tasks
