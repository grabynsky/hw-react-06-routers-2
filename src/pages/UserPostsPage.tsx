import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../services/postsService";
import {IPost} from "../types/IPost";
import UserPostComponent from "../components/UserPostComponent";

const UserPostsPage = () => {
    const {userId} = useParams();

    const [userPosts, setUserPosts] = useState<IPost[]>([])

    useEffect(() => {
        postsService.getPostsUser(Number(userId))
            .then(value => {
                setUserPosts(value.data)
            })
    }, []);

    return (
        <div>
            {
                userPosts.map((posts, index) => <UserPostComponent key={index} posts={posts}/>)
            }
        </div>
    );
};

export default UserPostsPage;