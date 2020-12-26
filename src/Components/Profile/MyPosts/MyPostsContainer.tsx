import React from 'react';
import {addNewPostAC, AddNewPostActionType} from "../../../Redux/profile-reduser";
import MyPosts, {PostTextType} from "./MyPosts";
import {storeType} from "../../../index";
import StoreContext from "../../../StoreContext";


type propsType = {
    // posts: Array<PostTextType>
    // dispatch: (action: AddNewPostActionType) => void
    // store: storeType
}


const MyPostsContainer = (props: propsType) => {

    // const OnAddNewPost = (postMessage: string) => {
    //     props.store.dispatch(addNewPostAC(postMessage)) // с Action Creator
    // }

    return <StoreContext.Consumer>
        {
            (store) => {
                const OnAddNewPost = (postMessage: string) => {
                    store.dispatch(addNewPostAC(postMessage)) // с Action Creator
                }

                return <MyPosts posts={store.getState().profilePage.posts} addNewPost={OnAddNewPost}/>
            }}


    </StoreContext.Consumer>
    //<MyPosts posts={props.store.getState().profilePage.posts} addNewPost={OnAddNewPost}/>
}

export default MyPostsContainer;