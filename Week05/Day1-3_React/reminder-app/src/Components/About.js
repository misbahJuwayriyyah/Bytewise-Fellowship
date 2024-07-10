import { Link } from "react-router-dom"
const About = () => {
  return (
    <div className="header">
        <h4>Version 1.0.0</h4>
        <Link to='/'>GO BACK</Link>
      {/* <a href="/">GO BACK</a> */}
      {/* To not reload the page while clicking on the link, use link */}
    </div>
  )
}

export default About
