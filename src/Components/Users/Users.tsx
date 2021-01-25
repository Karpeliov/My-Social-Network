import React from "react";
import styles from "./Users.module.css";
import defaultUserImg from "../../assets/images/images.png"
import {toggleFollowingProgress, UserType} from "../../Redux/users-reduser";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    totalUsersCount: number
    pageNumber: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChange: (pageNumber: number) => void
    toggleFollowingProgress: (a: boolean, userId: number) => void
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
            {pages.map((p) => {
                return <span className={(props.currentPage === p) ? styles.selectedPage : ""}
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
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            {u.followed
                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    usersAPI.unfollow(u.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unFollow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id)
                    })


                }}>Unfollow</button>
                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    usersAPI.follow(u.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(u.id)
                        }
                        props.toggleFollowingProgress(false, u.id)
                    })
                    props.follow(u.id)
                }}>Follow</button>}
        </div>)}
    </div>
}

export default Users