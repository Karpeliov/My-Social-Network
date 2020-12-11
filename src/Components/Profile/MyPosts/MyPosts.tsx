import React, {ChangeEvent, useState} from 'react';
import MyPostCSS from './MyPosts.module.css';
import Post from "./Post/Post";

export type PostTextType = {
    id: number
    message: string
    likeCounts: number

}

type postsType = {
    posts: Array<PostTextType>
    addNewPost: (postMessage: string) => void
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

    props.addNewPost(postMessage)
        setPostMessage("")
    }

    return <div>
        <div className={MyPostCSS.main}>My Posts</div>

        <div>
            {/*onChange={onChangeHandler}*/}
            <textarea value={postMessage} onChange={onChangeHandlerNewPost} onKeyPress={(e ) => {if (e.ctrlKey === true) AddNewPost() }} />
            <div>
                {/*onClick={AddNewPost}*/}
            <button onClick={AddNewPost}>Add Post</button>
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