import React, { useState } from 'react';
import { FaBars, FaTimes, FaPlus, FaUserAlt } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav>
                <div className={click ? 'navbar_menu active' : 'navbar_menu'}>
                    <div className='navbar_logo'><a href='/'>CarScout</a></div>
                    <div className='navbar_items'>
                        <a href='/Kontakt'>Centrum pomocy</a>
                    </div>
                    <div className='navbar_panel'>
                            <>
                                <a href='/Konto'><FaUserAlt /> Twoje konto</a>
                                <a href='/DodajOgloszenie'><FaPlus /> Dodaj ogłoszenie</a>
                            </>
                    </div>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />) : (<FaBars size={30} style={{ color: 'white' }} />)}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
