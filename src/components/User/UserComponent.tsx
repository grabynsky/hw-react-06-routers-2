import React, {FC} from 'react';
import {IUser} from "../../types/IUser";
import {useNavigate} from "react-router-dom";
import styles from './UserComponent.module.css'

type IProps = {
    user:IUser,
}

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();

    const onClickPostsHandler = () => {
            navigate(user.id.toString())
    };
    return (
        <div>
            <div>
                <p><b>{user.id}</b> - {user.name}</p>
                <p>E-mail: {user.email}</p>
                <p>Website: {user.website}</p>

                <button
                    className={styles.userButton}
                    onClick={onClickPostsHandler}
                >Posts
                </button>
                <hr/>

            </div>

        </div>
    );
};

export default UserComponent;