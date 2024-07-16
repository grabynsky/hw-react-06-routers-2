import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IComment} from "../types/IComment";
import {postsService} from "../services/postsService";
import CommentPostComponent from "./CommentPostComponent";

const CommentPostsComponent = () => {
    const [postComments, setPostComments] = useState<IComment[]>([])

    const {id} = useParams();

    useEffect(() => {
        postsService.postComments(Number(id))
            .then(value => {
                setPostComments(value.data)
        })
    }, [id]);

    return (
        <>
            {
                postComments.map((comments, index) =>
                    <CommentPostComponent key={index} comments={comments} />
                )
            }
        </>
    );
};

export default CommentPostsComponent;