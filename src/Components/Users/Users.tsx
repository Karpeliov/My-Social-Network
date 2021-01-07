import React from "react";
import { v1 } from "uuid";
import {UserType} from "../../Redux/users-reduser";
import styles from "./Users.module.css";

export type UsersPropsType = {
    // userID: string
    users: Array<UserType>
    unFollow: (userID: string) => void
    follow: (userID: string) => void
    addUsers: (users: Array<UserType>) => void
}

let Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.addUsers ([
            {
                id: v1(), followed: true, fullName: "Sasha", status: "Fuck the belarusian police",
                location: {country: "Poland", city: "Warshaw"},
                photoURL: "https://avatars3.githubusercontent.com/u/74488783?s=460&u=ca6052fdbd88d964747449d3d0c250741e0c85ac&v=4"
            },
            {
                id: v1(), followed: true, fullName: "Yania", status: "Poland rules!",
                location: {country: "Poland", city: "Warshaw"}, photoURL: ""
            },
            {
                id: v1(), followed: false, fullName: "Kira", status: "I'm a Unicorn",
                location: {country: "Poland", city: "Warshaw"}, photoURL: ""
            },
        ])
    }


    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <img className={styles.photo} src={u.photoURL}/>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            {u.followed
                ? <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
        </div>)}
    </div>
}

export default Users