import {axiosService} from "./axiosServices";
import {urls} from "../constants/urls";
import {IPost} from "../types/IPost";
import {IRes} from "../types/IRes";
import {IComment} from "../types/IComment";


const postsService= {
    getPosts: (): IRes<IPost[]> => axiosService.get(urls.posts),
    getPostsUser: (id: number):IRes<IPost[]> => axiosService.get(urls.byUserId + id),
    postComments: (id: number): IRes<IComment[]> => axiosService.get(urls.posts + '/' + id + '/' + urls.comments)
}

export {
    postsService,
}