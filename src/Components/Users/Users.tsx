import React from "react";
import styles from "./Users.module.css";
import defaultUserImg from "../../assets/images/images.png"
import {UserType} from "../../Redux/users-reduser";
import {NavLink} from 'react-router-dom';

export type UsersPropsType = {
    totalUsersCount: number
    pageNumber: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChange: (pageNumber: number) => void
    followingProgress: any[]
}

let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: any[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={styles.users}>
        <div>
            {pages.map((p, index) => {
                return <span key={index} className={(props.currentPage === p) ? styles.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}> {p} </span>
            })}
        </div>
        {props.users.map((u: UserType) => <div key={u.id}>
            <span>
                <NavLink to={'/profile/' + u.id}>
                    <img className={styles.photo} src={u.photos.small != null ? u.photos.small : defaultUserImg}/>
                </NavLink>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    {/*<div>{"u.location.city"}</div>*/}
                </span>
            </span>
            {u.followed
                ? <button disabled={props.followingProgress.some(id => id === u.id)}
                          onClick={() => {
                              props.unFollow(u.id)
                          }}>
                    Unfollow</button>
                : <button disabled={props.followingProgress.some(id => id === u.id)}
                          onClick={() => {
                              props.follow(u.id)
                          }}>
                    Follow</button>}
        </div>)}
    </div>
}

export default Users