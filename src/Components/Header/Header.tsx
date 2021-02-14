import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import style from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../Redux/auth-reduser";
import {RootStateType} from "../../Redux/redux-store";


export type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch()
    const isAuth = useSelector<RootStateType, boolean | undefined>(state => state.auth.isAuth)


    const logout = () => {dispatch(logOut())}


    return (
            <header className={style.header}>
                <img src='https://miro.medium.com/max/1004/1*ZfCTE6kZArxc0Nr_MybXPQ.png' alt={"img-logo"}/>

                <div className={style.loginBlock}>
                    {isAuth ? <div>{props.login} - <button onClick={logout}>Logout</button></div>
                    : <NavLink to={'/login'} activeClassName={style.activeLink}>Login</NavLink>
                    }

                </div>

            </header>
    )
}

export default Header;