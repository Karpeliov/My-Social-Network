import React from 'react';
import {DispatchType, RootStateType} from "../../Redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addNewPost, setUserProfile} from "../../Redux/profile-reduser";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component<DispatchType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(withUrlDataContainerComponent);