import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import NavCSS from "../Navbar/Navbar.module.css";
import {initialStateType} from "../../Redux/auth-reduser";

export type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
            <header className={style.header}>
                <img src='https://miro.medium.com/max/1004/1*ZfCTE6kZArxc0Nr_MybXPQ.png'/>
                <div className={style.loginBlock}>
                    {props.isAuth ? <div>{props.login}</div>
                    : <NavLink to={'/login'} activeClassName={style.activeLink}>Login</NavLink>
                    }

                </div>
            </header>
    )
}

export default Header;