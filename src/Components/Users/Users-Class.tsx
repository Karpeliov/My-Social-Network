import React from "react";
import {UserType} from "../../Redux/users-reduser";
import styles from "./Users.module.css";
import axios from "axios";
import defaultUserImg from "../../assets/images/images.png"
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {UsersPropsType} from "./Users";

type PropsType = {
    follow: (userID: number) => void
    addUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<DispatchType> {  // it was like this React.Component<any, any>

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.addUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.users.map((u: UserType) => <div key={u.id}>
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
                        this.props.unFollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Follow</button>}
            </div>)}
        </div>
    }
}

export default Users