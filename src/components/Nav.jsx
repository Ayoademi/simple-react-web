import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav>  
        <NavLink to="/">Home</NavLink>
        <NavLink to="/random-images">Images</NavLink>
    </nav>
  )
}


export default Nav;