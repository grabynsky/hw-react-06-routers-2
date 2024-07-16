import React, {FC} from 'react';
import {IPost} from "../../types/IPost";
import {Link} from "react-router-dom";

type IProps = {
    post: IPost,
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <>
            <p>UserID: {post.userId}</p>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <Link to={post.id.toString()}>Comments</Link>
            <hr/>
        </>
    );
};

export default PostComponent;