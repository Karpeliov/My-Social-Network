import React, {ChangeEvent, TextareaHTMLAttributes, useState} from 'react';
import MyPostCSS from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostAC, AddNewPostActionType} from "../../../Redux/State";

export type PostTextType = {
    id: number
    message: string
    likeCounts: number

}



type postsType = {
    posts: Array<PostTextType>
    // addNewPost: (postMessage: string) => void
    dispatch: (action: AddNewPostActionType) => void
}

const MyPosts = (props: postsType) => {

    let myPostElement = props.posts.map((post) =>
        <Post message={post.message} likeCounts={post.likeCounts} id={post.id}/>)

    const [postMessage, setPostMessage] = useState<string>("")

    const onChangeHandlerNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // setError(null)
        setPostMessage(e.currentTarget.value)
    }

    const AddNewPost = () => {
        // props.addNewPost(postMessage) // так было до dispatch
        // props.dispatch({type: "ADD_NEW_POST", postMessage: postMessage}) // без Action Creator
        props.dispatch(addNewPostAC(postMessage)) // с Action Creator
        setPostMessage("")
    }

    return <div>
        <div className={MyPostCSS.main}>My Posts</div>

        <div>
             <textarea cols={75} rows={5} value={postMessage} onChange={onChangeHandlerNewPost} onKeyPress={(e) => {
                 if (e.ctrlKey === true) AddNewPost()}}
             />
            <div>
                {/*onClick={AddNewPost}*/}
                <button onClick={AddNewPost} className={MyPostCSS.addPostBtn}>Add Post</button>
            </div>

        </div>

        <div className={MyPostCSS.main}>
            New Post
        </div>
        {myPostElement}
        {/*было так*/}
        {/*<Post  message = {Posts[0].message} likeCounts={Posts[0].likeCounts} id={Posts[0].id}/>*/}

    </div>
}

export default MyPosts;