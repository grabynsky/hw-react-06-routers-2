import React, {useEffect, useState} from 'react';
import {IComment} from "../../types/IComment";
import CommentComponent from "../comment/CommentComponent";
import {commentsService} from "../../services/commentsService";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentsService.getComments()
            .then(value => {
                setComments(value.data);
            })
    }, []);

    return (
        <>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </>
    );
};

export default CommentsComponent;