import React, {ChangeEvent, useState} from 'react';
import MyPostCSS from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {TextAria} from "../../common/FormsControls/FormsControls";

export type PostTextType = {
    id: number
    message: string
    likeCounts: number
}

type postsType = {
    posts: Array<PostTextType>
    addNewPost: (postMessage: string) => void
    // dispatch: (action: AddNewPostActionType) => void
}

const MyPosts = (props: postsType) => {

    let myPostElement = props.posts.map((post) =>
        <Post message={post.message} likeCounts={post.likeCounts} id={post.id} key={post.id}/>)

    const [postMessage, setPostMessage] = useState<string>("")

    const onChangeHandlerNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // setError(null)
        setPostMessage(e.currentTarget.value)
    }

    const AddNewPost = () => {
        props.addNewPost(postMessage)
        setPostMessage("")
    }

    const onSubmit = (formData: any) => {
        console.log(formData.myNewPost)
        props.addNewPost(formData.myNewPost)
    }

    return <div>
        <div className={MyPostCSS.main}>My Posts</div>

        {/*<div>*/}
        {/*     <textarea cols={75} rows={5} value={postMessage} onChange={onChangeHandlerNewPost} onKeyPress={(e) => {*/}
        {/*         if (e.ctrlKey) AddNewPost()*/}
        {/*     }}*/}
        {/*     />*/}
        {/*    <div>*/}
        {/*        /!*onClick={AddNewPost}*!/*/}
        {/*        <button onClick={AddNewPost} className={MyPostCSS.addPostBtn}>Add Post</button>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <MyPostReduxForm onSubmit={onSubmit}/>

        <div className={MyPostCSS.main}>
            New Post
        </div>
        {myPostElement}
    </div>
}
let maxLengthCreator10 = maxLengthCreator(10)
let minLengthCreator2 = minLengthCreator(2)

const MyPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field cols={75} rows={5} name={"myNewPost"} component={TextAria} placeholder={"Post"}
               validate={[required, maxLengthCreator10, minLengthCreator2]}
        />
        <div>
            <button className={MyPostCSS.addPostBtn}>
                Add Post
            </button>
        </div>
    </form>
}

const MyPostReduxForm = reduxForm({form: 'MyPost'})(MyPostForm)

export default MyPosts;