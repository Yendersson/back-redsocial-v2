import express from 'express';
import { CommonRoutesConfig } from "./common.routes.config";
import postController from '../controller/post.controller';

export class PostRoutes extends CommonRoutesConfig{
    
    constructor(app: express.Application){
        super(app, 'PostRoute');
    }

    configureRoutes(): express.Application {

        this.app
            .route("/api/post")
            .get(postController.listAllPosts)
            .post(postController.createNewUser)
            .put(postController.updatePost);

        this.app
            .route("/api/post/:id")
            .delete(postController.deletePost)
            return this.app;
    }
}
