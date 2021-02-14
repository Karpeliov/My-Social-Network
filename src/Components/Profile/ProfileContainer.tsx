import React from 'react';
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/profile-reduser";
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<DispatchType> {


    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
           // userId = 2
            userId = this.props.myId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    myId: state.auth.userId,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

// let withUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default WithAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent));