import React from 'react';
import ContentCSS from './Profile.module.css';
import MyPosts, {PostTextType} from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddNewPostActionType, ProfileType} from "../../Redux/profile-reduser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {storeType} from "../../index";

// type postsStateType = {
//     posts: Array<PostTextType>
// }
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