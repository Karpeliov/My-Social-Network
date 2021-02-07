import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType} from "../../Redux/profile-reduser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: ProfileType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;