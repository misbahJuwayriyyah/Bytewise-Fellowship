import PropTypes from 'prop-types'
const Button = ({onAdd,text,color='steelblue'}) => {
    /*Functions/Events are defined inside the component before returns and then use it with the element.Or use can use event methods we learnt in DOM before. e is the event object*/
    // const onClick=(e)=>{
    //     console.log(e);
    // }
    //We can also pass the events in the form of props
    return (
        <button className='btn' style={{backgroundColor:color}} onClick={onAdd}>{text}</button>
    )
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onAdd:PropTypes.func.isRequired,
}
export default Button
