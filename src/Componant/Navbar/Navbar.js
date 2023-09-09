import './Navbar.css'
import {Link} from 'react-router-dom'
export function Navbar(){
return(
    <>
    <div className="navbar">
        <div className="logo-item">
        <div className="logo"></div>
        </div>
        <div className="menu">     
            <Link to="/" className="menu-items">Home</Link>
            <Link to="/Project" className="menu-items">Projects</Link>
            <Link to="/Contact" className="menu-items">Contact</Link>
            <Link to="/About" className="menu-items">About</Link>
        </div>
    </div>
    </>
)
}