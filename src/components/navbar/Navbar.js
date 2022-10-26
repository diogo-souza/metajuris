import React, { useState } from 'react'
import databaseicon from '../../assets/database.png'
import menuicon from '../../assets/menu.png'
import './NavbarStyles.css'

import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                <img src={databaseicon} alt="database" className='icon'/>
                    <h1>Secured</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button>Sign in</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<img src={menuicon} alt="database" className='icon'/>) : (<img src={menuicon} alt="database" className='icon'/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar