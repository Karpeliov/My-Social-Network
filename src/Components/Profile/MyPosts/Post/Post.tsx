import React from 'react';
import MyPostCSS from './Post.module.css';

type PostTextType = {
    id: number
    message: string
    likeCounts: number
}

const Post = (PostText: PostTextType) => {
    return (
        <div className={MyPostCSS.item}>
            <img src='https://images.static-bluray.com/reviews/17782_5.jpg'/>
            {PostText.message}
            <div><span>Like!  {PostText.likeCounts}</span></div>

        </div>

    )
}

export default Post;