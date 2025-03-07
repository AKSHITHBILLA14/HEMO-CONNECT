import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){
    return(
        <div className='navbar'>
            <ul>
                <li><Link to="/">Connect</Link></li>
            </ul>
            <ul>
                <li><Link to="/">About</Link></li>
            </ul>
            <ul>
                <li><Link to="/">Services</Link></li>
            </ul>
            <ul>
                <li><Link to="/">Support</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;