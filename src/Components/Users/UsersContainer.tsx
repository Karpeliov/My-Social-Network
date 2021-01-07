import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {addUsersAC, followAC, unFollowAC, UserType} from "../../Redux/users-reduser";

let mapStateToProps = (state: RootStateType) => { // state: RootStateType
    return {
        users: state.usersPage.users // ???
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userID: string) => {dispatch(followAC(userID))},
        unFollow: (userID: string) => {dispatch(unFollowAC(userID))},
        addUsers: (users: Array<UserType>) => {dispatch(addUsersAC(users))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)