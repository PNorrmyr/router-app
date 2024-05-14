import { Link } from "react-router-dom"

function Navigation() {
  return (
  <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/Logbook'>
        <li>Logbook</li>
      </Link>
      <Link to='/Duties'>
        <li>Duties</li>
      </Link>   
  </ul>
  )
}

export default Navigation
