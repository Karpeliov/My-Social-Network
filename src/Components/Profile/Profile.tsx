import React from 'react';
import ContentCSS from './Profile.module.css';
import MyPosts, {PostTextType} from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

type postsStateType = {
    posts: Array<PostTextType>
}

export type ProfilePropsType = {
    // posts: Array<PostTextType>
    profileState: postsStateType
    addNewPost: (postMessage: string) => void
}

const Profile = (ProfileProps: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>

            <MyPosts addNewPost={ProfileProps.addNewPost} posts={ProfileProps.profileState.posts}/>
        </div>
    )
}

export default Profile;