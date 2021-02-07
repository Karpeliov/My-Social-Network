import React from "react";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow,
} from "../../Redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

// Class Component
class UsersContainer extends React.Component<DispatchType> {  // it was like this React.Component<any, any>

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChange={this.onPageChange}
                   pageNumber={this.props.pageNumber}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }),
    WithAuthRedirect
)(UsersContainer)
