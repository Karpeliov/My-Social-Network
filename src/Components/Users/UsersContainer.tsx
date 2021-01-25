import React from "react";
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import {
    addUsers,
    follow,
    setCurrentPage,
    setTotalUsersCount, toggleFollowingProgress,
    toggleIsFetching,
    unFollow,
} from "../../Redux/users-reduser";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

// Class Component
class UsersContainer extends React.Component<DispatchType> {  // it was like this React.Component<any, any>

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.addUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.addUsers(data.items)
            })
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
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

// let mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unFollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         },
//         addUsers: (users: Array<UserType>) => {
//             dispatch(addUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default connect(mapStateToProps,
    {
        follow, unFollow, addUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
    })(UsersContainer)