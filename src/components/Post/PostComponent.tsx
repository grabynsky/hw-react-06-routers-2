import React, {FC} from 'react';
import {IPost} from "../../types/IPost";
import {useNavigate} from "react-router-dom";
import styles from './PostComponent.module.css';

type IProps = {
    post: IPost,
}
const PostComponent: FC<IProps> = ({post}) => {
    const navigate= useNavigate();
    const onClickPostHandler = () => {
        navigate(post.id.toString())
    };
    return (
        <>
            <p>UserID: {post.userId}</p>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>

            <button
                className={styles.button}
                onClick={onClickPostHandler}
            >Comments</button>
            <hr/>
        </>
    );
};

export default PostComponent;