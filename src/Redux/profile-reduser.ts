import {MainActionType, profilePageType, } from "./State";
import {PostTextType} from "../Components/Profile/MyPosts/MyPosts";

export const profileReducer = (profileState: profilePageType, action: MainActionType) => {
    if (action.type === "ADD_NEW_POST") {
        let newPost: PostTextType;
        newPost = {id: 4, message: action.postMessage, likeCounts: 0};
        profileState.posts.unshift(newPost)

    }
    return profileState
}

export default profileReducer