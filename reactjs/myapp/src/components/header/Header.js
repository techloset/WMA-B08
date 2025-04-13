// import {NavLink} from 'react-router';
import './header.css';
import { useEffect } from 'react';
function Header (){
    useEffect(()=>{
        console.log("Header mounted");
       
    },[])
    useEffect(()=>{
        return () => {
            window.confirm("Are you sure you want to leave this page?");
           
        }
    },[])
    return (
        <header className='myheader'>
            <h1>Header</h1>
            {/* <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to='/services'>Services</NavLink> */}
        </header>
    )
}

export default Header;