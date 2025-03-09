import {NavLink} from 'react-router';
import './header.css';
function Header (){
    return (
        <header className='myheader'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to='/services'>Services</NavLink>
        </header>
    )
}

export default Header;