import React, { useState } from 'react'
import menuicon from '../../assets/menu.png'
import './NavbarStyles.css'
import mainLogo from '../../assets/Logotipo_Metajuris.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <img width="400" height="110" src={mainLogo} alt="Main Logo"></img>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Quem somos?</Link></li>
                    <li><Link to='/proposta'>Proposta</Link></li>
                    <li><Link to='/recovery'>Estrutura e Endereço</Link> </li>
                    <li><Link to='/contact'>Contato</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<img src={menuicon} alt="database" className='icon' />) : (<img src={menuicon} alt="database" className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar