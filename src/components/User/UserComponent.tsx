import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
// import styles from './UserComponent.module.css';
import {Link} from "react-router-dom";

type IProps = {
    user:IUser,
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <div>
                <p><b>{user.id}</b> - {user.name}</p>
                <p>E-mail: {user.email}</p>
                <p>Website: {user.website}</p>

                <Link to={user.id.toString()}>posts-link</Link>
                <hr/>
            </div>

        </div>
    );
};

export default UserComponent;