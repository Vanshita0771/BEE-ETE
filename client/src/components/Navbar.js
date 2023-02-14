import React,{useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar=()=>{
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return(
        <div className='navbar'>
             <div className='container'>
                <h1>
                    <span><BsFillHouseFill/></span>Estate</h1>
                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/' className='linking'>Home</Link></li>
                    <li><Link to='/properties' className='linking'>Properties</Link></li>
                    <li><Link to='/about' className='linking'>About</Link></li>
                    <li><Link to='/contact' className='linking'>Contact</Link></li>
                    <li className='linking' onClick={handleLogout}><Link> Logout</Link> </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
               
             </div>
        </div>
    )
}
export default Navbar;