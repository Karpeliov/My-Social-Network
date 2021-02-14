import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

export type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
            <header className={style.header}>
                <img src='https://miro.medium.com/max/1004/1*ZfCTE6kZArxc0Nr_MybXPQ.png' alt={"img-logo"}/>
                <div className={style.loginBlock}>
                    {props.isAuth ? <div>{props.login}</div>
                    : <NavLink to={'/login'} activeClassName={style.activeLink}>Login</NavLink>
                    }

                </div>
            </header>
    )
}

export default Header;