import React from 'react';
import HeadCSS from './Header.module.css';

const Header = () => {
    return (
            <header className={HeadCSS.header}>
                <img src='https://miro.medium.com/max/1004/1*ZfCTE6kZArxc0Nr_MybXPQ.png'/>
            </header>
    )
}

export default Header;