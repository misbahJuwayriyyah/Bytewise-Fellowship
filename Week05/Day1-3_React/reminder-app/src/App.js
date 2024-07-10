//React is a library for building user interfaces.
// React runs on the client as a SPA (Single Page App), but can be used to build full stack apps by communicating with a server/API (e.g. MERN stack).
// React is often referred to as a front-end 'framework' because itis capable and directly comparable to a framework such as Angular or Vue.
// You can use other frameworks like Django with the React tomake full stack websites and in that case you communicate using JSON formatted data.
// JQuery is also a library.
// Why react?
//     Structure the 'view' layer of your application.
//     Reusable components with their own state.
//     JSX-Dynamic Markup
//     Interactive UIs with virtual DOM (no reloading but still updating the parts of the page)
//     Performance and Testing
//     Very Popular in the industry.
// Components: Functions vs. Classes
//     Functions:
//         export const Header = () => {
//             return (
//                 <div>
//                     <h1>My Header</h1>
//                 </div>
//             )
//         }
//     Classes: 
//         export default class Header extends React.Component{
//             render(){
//                 return(
//                     <div>
//                     <h1>My Header</h1>
//                 </div>
//                 )
//             }
//         }
//     Components render/return jsx.
//     Components can also take in 'props'
//     <Header title='My Title'>
// Working with State:
//     Components can have 'state' which is an object that determines how a component renders and behaves.
//     'App' or 'global' state refers to state that is available to entire UI, not just a single component.
//     ContextAPI or redux for state management.
//     We can use functional components with 'hooks' to work with states.
// React Hooks:
//     React hooks are functions that let us hook into the react state and lifecyle features from function components.
//     useState: Returns a stateful value and a function to update it.
//     useEffect: Perform side effects in function components.
//     useContext, useReducer, useRef etc.
//     You can also create your custom hooks.
// JSON server - fake backend

// Creating a new React App:
//     npx create-react-app my-app
//     cd my-app
//     npm start
//     .........
//     npm install
// npm = Node Package Manager
// npx = Node Package eXecute
// Node.js (node): A runtime environment for executing JavaScript code outside of a web browser (server-side).
// npm: A package manager for installing, managing, and running project dependencies and scripts.
// -- use react developer tools extension
// -- look into package.json for advance libraries for testing/building etc.
// -- Development build vs Production build
//     Development Build: Includes detailed error messages and debugging tools, optimized for developer experience.
//     Production Build: Minified and optimized for performance and security, suitable for end-user deployment.
// -- We change everything in the src folder (code) and put images etc. in the public folder.
// -- index.html (div.root) -> index.js (root.render) -> App.js (everything is displayed on the root)
// -- index.html : To use bootstrap cdn etc. or change title etc.
// -- We mainly start from changing the App.js file.
// -- For Emmet to work you can click on the 'javascript' and select react javascript and emmets will work for you.
//-- There are some extra test files that can be used to run tests later.
//-- Installing React icons: 
//      npm i react-icons
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import React, { useState, useEffect} from 'react'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
//importing React is a must for class components.'
const App = () => {
  //The events are stored in App.js and then use them in props
  const [tasks,setTasks]=useState([]);
  const [showAddTask,setShowAddTask]=useState(false);
  useEffect(()=>{
    const getTasks=async()=>{
      const tasksFromServer=await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[]);//Dependency array -- if any value changes
  //Fetch Tasks
  const fetchTasks=async()=>{
    const res =await fetch('http://localhost:5000/tasks');
    const data=await res.json();
    return data;
  }
  //Deleting Task
  const dltTask= async(id)=>{
    // The filter function in JavaScript creates a new array containing all elements from the original array that pass a specified test function.
    //so here we are basically returning a new array that consists of all the tasks except for the task whose id is passed as an argument.
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'}) // We would not store it in any variable because we are not fetching anything.
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  //Fetch Task
  const fetchTask=async(id)=>{
    const res =await fetch(`http://localhost:5000/tasks/${id}`);
    const data=await res.json();
    return data;
  }
  //Setting a reminder (Toggle the reminder on doubleClick and border green on left if true)
  const ToggleReminder=async(id)=>{
    const taskToToggle=await fetchTask(id);
    const updatedTask={...taskToToggle,reminder:!taskToToggle.reminder}; //remember
    const res=await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(updatedTask)
        })
    const data=await res.json();
    setTasks(
      tasks.map((task)=>{
        return task.id===id?{...task,reminder:data.reminder}:task
        }
      )
    )
  }
  //Add Task
  const addTask=async(task)=>{
    // const id=Math.floor(Math.random()*10000)+1; json adds the id for us
    // const newTask={id,...task};
    // setTasks([...tasks,newTask]);
    const res=await fetch(`http://localhost:5000/tasks`,{method:'POST',
     headers:{
      'Content-type':'application/json'
     },
     body:JSON.stringify(task) //on retreiving : convert into json, on posting: convert into stringify (obj to json string).
    })
    const data=await res.json(); //must await as it is a promise
    setTasks([...tasks,data]);
  }
  return (
    <Router>
      <div className='container'>
      {/*We can pass component props from here. Comments inside children section of tag should be placed inside braces. To pass numbers/booleans use braces.*/}
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask}/>} {/*alternative to tertianry */}
              {/*We want to control tasks through other components */}
              {tasks.length>0?<Tasks tasks={tasks} onDelete={dltTask} reminder={ToggleReminder}/>:'No Tasks to Display'}
            </>
          }/>
          <Route path='/about' element={<About/>}/> {/*Remember the syntax */}
      </Routes>
      {/* Using <Routes> and <Route> correctly: The <Routes> component should only wrap <Route> components, and each <Route> should use the element prop instead of render or component.
      exact prop: In React Router v6, the exact prop is no longer needed.
      Nesting <Routes>: You should not nest <Routes> components. Instead, you should have a single <Routes> component wrapping all your <Route> components.
      Passing props: To pass props to a component in a route, you should use the element prop with JSX. */}
      
      <Footer/>
    </div>
    </Router>
  )
}


export default App
//npm run build -- This will store all your assets in the 'build' folder and that's what you'll use for the production.
//Locally:
// npm install -g serve
//   serve -s build
//OR
// serve -s build -p 8000
// We can delete all the foldrs and this will still work.

//JSON Server: (mock server)
//npm install json-server
// TO run the above you need a new script in package.json: "server":"json-server --watch db.json --port 5000"
//npm run server
//remeber C (add task) R (fetch) U (ToggleReminder) D (dltTask) operations

//React-Router: 
//  npm install react-router-dom



