import React, {FC} from 'react';
import {IComment} from "../../types/IComment";

type IProps = {
    comment: IComment,
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <>
         <p>PostId: {comment.postId}</p>
         <p>Id: {comment.id}</p>
         <p>Name: {comment.name}</p>
         <p>E-mail: {comment.email}</p>
         <p>Body: {comment.body}</p>



            <hr/>
        </>
    );
};

export default CommentComponent;