import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/IUser";
import {usersService} from "../../services/usersService";
import UserComponent from "../User/UserComponent";

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        usersService.getUsers()
            .then(value => {
               setUsers(value.data);
            })
    }, []);

    return (
        <>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </>
    );
};

export default UsersComponent;