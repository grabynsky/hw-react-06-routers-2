import React, {FC} from 'react';
import {IComment} from "../types/IComment";

type IProps = {
    comments: IComment,
}
const CommentPostComponent: FC<IProps> = ({comments}) => {
    console.log(comments)
    const {postId, id, name , body , email} = comments;

    return (
        <>
            <p>
                <b>postId</b>: {postId} - <b>ID:</b> - {id}
                <p><b>Email:</b> {email}</p>
                <p><b>Name:</b> {name}</p>
                <p><b>Body:</b> {body}</p>
            </p>
            <hr/>

        </>
    );
};

export default CommentPostComponent;