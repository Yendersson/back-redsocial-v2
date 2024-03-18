import postDAO from "../dao/postDAO";
import { CreatePostDTO } from "../dto/post/CreatePostDTO";
import { UpdatePostDTO } from "../dto/post/UpdatePostDTO";

class PostService{
    async list(){
        const postList = await postDAO.findAll(); 
        console.log(postList)
        return postList;
    }

    async store(post: CreatePostDTO){
        return postDAO.store(post);
    }

    async update(post: UpdatePostDTO) {
        return postDAO.update(post);
    }

    async removeItem(id_post: any){
        return postDAO.removeItem(id_post);
    }
}

export default new PostService();