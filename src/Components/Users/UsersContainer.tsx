import React from "react";
import Users from "./Users-Class";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {addUsersAC, followAC, unFollowAC, UserType} from "../../Redux/users-reduser";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userID: number) => {dispatch(followAC(userID))},
        unFollow: (userID: number) => {dispatch(unFollowAC(userID))},
        addUsers: (users: Array<UserType>) => {dispatch(addUsersAC(users))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)