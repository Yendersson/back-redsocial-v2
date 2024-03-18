import express from 'express';
import PostService from '../service/PostService';



class PostController{

    async listAllPosts(req: express.Request, res: express.Response){
        console.log("get")
        try {
            const users = await PostService.list();
            res.status(200).send(users);
            
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    
    async createNewUser(req: express.Request, res: express.Response){
    
        const {body} = req;
        console.log(body);
        try {
            const post = await PostService.store(body);
            res.status(201).send(post);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    
    async updatePost(req: express.Request, res: express.Response){
    
        const {body} = req;
        console.log(body);
        try {
            const post = await PostService.update(body);
            res.status(201).send(post);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
    
    async deletePost(req: express.Request, res: express.Response){
    
        const {id} = req.params;
        try {
            const post = await PostService.removeItem(id);
            res.status(201).send(post);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
}

export default new PostController();