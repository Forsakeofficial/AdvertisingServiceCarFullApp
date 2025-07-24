import React from 'react';
import '../Styles/Header.css';

const Header = () => {
    return(
        <>
        <header>
            <div className='header'>
                <h1>Sprzedaż samochodów nowych i używanych</h1>
                <h2>oraz częsci samochodowych</h2>
            </div>
            <a href='#main' id='scroll-btn'> </a>
        </header>
        </>
    )
}

export default Header;