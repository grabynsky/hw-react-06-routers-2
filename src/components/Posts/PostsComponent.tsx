import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../types/IPost";
import {postsService} from "../../services/postsService";
import PostComponent from "../Post/PostComponent";

const PostsComponent: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postsService.getPosts().then(value => {
            setPosts(value.data);
        })
    }, []);

    return (
        <>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </>
    );
};

export default PostsComponent;