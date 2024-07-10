//Capitalised filename is a convention for the components.
//Install ES7 React/Redux/GraphQL/React-Native snippets extension for emmets like rcc, rce etc. (look at the documentation for more).
//We will use rafce.
import React from 'react' 
//importing React is a must for class components.
// const Header = (props) => {
//   return (
//     <div>
            /* The correct way to handle props is to define them and then use them. */
//       <header>Task Tracker {props.title}</header>
//     </div>
//   )
// }
//export default Header
//OR
//Header.deafultProps={title:'Task Tracker',} 
//The default one is overriden by the one passed by the parent component.

// const Header = ({title}) => { //another way of defining specific props
//   return (
//     <div>
//       <header>
//         {/*Default prop is rendering here*/}
//         <h1>{title}</h1>
//       </header>
//     </div>
//   )
// }
// //Warning: Header: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
// Header.defaultProps={
//     title:'Task Tracker',
// }
// export default Header
import PropTypes from 'prop-types' //imports should always be done in the start of the file.
//Following is the preferred way to use defaultProps to get rid of the above warnings.
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title='Task Tracker',onAdd,showAddTask}) => {
  //We can pass functions as props.
  const location=useLocation();
  return (
    <div>
      <header className='header'>
        <h1 style={HeaderStyle}>{title}</h1>
        {/* {showAddTask?<Button color='red' text='Hide' onAdd={onAdd}/>:<Button color='green' text='Add' onAdd={onAdd}/>} */}
        {location.pathname==='/'&&<Button color={showAddTask?'red':'green'} text={showAddTask?'Hide':'Add'} onAdd={onAdd}/>}
      </header>
    </div>
  )
}
//Prop Types :
//The output will still render but we get warning in the console if some other type is being used. 
Header.propTypes={
    title:PropTypes.string,
}
// Header.propTypes={
//     title:PropTypes.string.isRequired,
// }
//isRequired , in case of no defaults and even if the parents does not provide it, throws a warning. It simply means that the prop is required.

//for styling we can use external sheet or we can use braces style={{textAlign:'center'}} or we can use (Prefer the followig in case of dynamic styling):
const HeaderStyle={
    textAlign:'center'
}
export default Header





