import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import ErrorPage from "./layout/errors/ErrorPage";
import UserPostsPage from "./pages/UserPostsPage";
import PostCommentsPage from "./pages/PostCommentsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage />,

        children: [
            {
                index: true, element:<UsersPage/>,
            },
            {
                path:'users',
                element: <UsersPage/>
            },
            {
                path: 'users/:userId',
                element: <UserPostsPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path:'posts/:id',
                element:<PostCommentsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
        ]
    }
])

root.render(
    <RouterProvider router={router}/>
);

