import React from 'react';
import {Link} from "react-router-dom";
import styles from './HeaderComponent.module.css';

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <Link to={'users'}>Users</Link>
            <Link to={'posts'}>Posts</Link>
            <Link to={'comments'}>Comments</Link>
        </div>
    );
};

export default HeaderComponent;