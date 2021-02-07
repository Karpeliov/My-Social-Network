import React from 'react';
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reduser";
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<DispatchType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

// let withUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default WithAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent));