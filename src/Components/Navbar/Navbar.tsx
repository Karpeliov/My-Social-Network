import React from 'react';
import {NavLink} from 'react-router-dom';


import NavCSS from './Navbar.module.css';
import Friends, {friendsType} from "./Friends/Friends";

export type navbarPropsType = {
    frndState: Array<friendsType>
}


const Navbar = (navbarProps: navbarPropsType) => {

    // let friendsElement = navbarProps.frndState.map((f) => <Friends id={f.id}
    //                                                                frndAva={f.frndAva}
    //                                                                frndName={f.frndName}/>)

    return (
        <nav className={NavCSS.navbar}>
            <div className={NavCSS.item}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <NavLink to="/profile" activeClassName={NavCSS.activeLink}>Profile</NavLink>
            </div>
            <div className={NavCSS.item}>
                <NavLink to="/dialogs" activeClassName={NavCSS.activeLink}>Messages</NavLink>
            </div>
            <div className={NavCSS.item}>
                <NavLink to="/news" activeClassName={NavCSS.activeLink}>News</NavLink>
            </div>
            <div className={NavCSS.item}>
                <NavLink to="/music" activeClassName={NavCSS.activeLink}>Music</NavLink>
            </div>
            <div className={NavCSS.item}>
                <NavLink to="/settings" activeClassName={NavCSS.activeLink}>Settings</NavLink>
            </div>


           <Friends frndState={navbarProps.frndState}/>

        </nav>
    )
}

export default Navbar;