import React from 'react';
import ContentCSS from './Profile.module.css';
import MyPosts, {PostTextType} from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddNewMessageActionType, AddNewPostActionType} from "../../Redux/State";

type postsStateType = {
    posts: Array<PostTextType>
}

export type ProfilePropsType = {
    profileState: postsStateType
    dispatch: (action: AddNewPostActionType) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}  posts={props.profileState.posts} />
        </div>
    )
}

export default Profile;