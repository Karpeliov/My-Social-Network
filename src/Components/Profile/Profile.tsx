import React from 'react';
import ContentCSS from './Profile.module.css';
import MyPosts, {PostTextType} from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddNewPostActionType} from "../../Redux/profile-reduser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {storeType} from "../../index";

type postsStateType = {
    posts: Array<PostTextType>
}

export type ProfilePropsType = {
    // profileState: postsStateType
    // dispatch: (action: AddNewPostActionType) => void
    // store: storeType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    )
}

export default Profile;