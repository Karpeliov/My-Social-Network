import React from "react";
import {UserType} from "../../Redux/users-reduser";
import styles from "./Users.module.css";
import axios from "axios";
import defaultUserImg from "../../assets/images/images.png"

export type UsersPropsType = {
    users: Array<UserType>
    unFollow: (userID: number) => void
    follow: (userID: number) => void
    addUsers: (users: Array<UserType>) => void
}

let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.addUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map(u => <div key={u.id}>
            <span>
                <img className={styles.photo} src={u.photos.small != null ? u.photos.small : defaultUserImg}/>
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
                ? <button onClick={() => {
                    props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}
        </div>)}
    </div>
}

export default Users

//[
// {
//     id: 1, followed: true, fullName: "Sasha", status: "Fuck the belarusian police",
//     location: {country: "Poland", city: "Warshaw"},
//     photoURL: "https://avatars3.githubusercontent.com/u/74488783?s=460&u=ca6052fdbd88d964747449d3d0c250741e0c85ac&v=4"
// },
// {
//     id: 2, followed: true, fullName: "Yania", status: "Poland rules!",
//     location: {country: "Poland", city: "Warshaw"}, photoURL: ""
// },
// {
//     id: 3, followed: false, fullName: "Kira", status: "I'm a Unicorn",
//     location: {country: "Poland", city: "Warshaw"}, photoURL: ""
// },
//]