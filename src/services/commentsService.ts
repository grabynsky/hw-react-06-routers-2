import {axiosService} from "./axiosServices";
import {urls} from "../constants/urls";
import {IRes} from "../types/IRes";
import {IComment} from "../types/IComment";


const commentsService = {
    getComments: (): IRes<IComment[]> => axiosService.get(urls.comments),

}

export {
    commentsService,
}