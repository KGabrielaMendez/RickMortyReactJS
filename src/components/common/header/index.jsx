import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className="header-container">
                <ul>
                    <li><Link to="/characters">Personajes</Link></li>
                </ul>
                
            </header>
        </>
    )
};

export default Header;

