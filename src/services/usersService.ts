import {axiosService} from "./axiosServices";
import {urls} from "../constants/urls";
import {IRes} from "../types/IRes";
import {IUser} from "../types/IUser";

const usersService = {
    getUsers: ():IRes<IUser[]> => axiosService.get(urls.users)
};

export {
    usersService,
}