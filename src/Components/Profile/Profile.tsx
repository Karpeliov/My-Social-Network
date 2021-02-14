import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType} from "../../Redux/profile-reduser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => string
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;