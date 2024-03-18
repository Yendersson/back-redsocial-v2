import * as express from 'express';
import { CommonRoutesConfig } from "./common.routes.config";
import userController from '../controller/user.controller';
import { Jwt } from '../security/Jwt';

export class UserRoutes extends CommonRoutesConfig{
    
    constructor(app: express.Application){
        super(app, 'UserRoute');
    }

    configureRoutes(): express.Application {

        this.app
            .route("/api/user")
            .get(userController.listAllUsers)
            .post(userController.createNewUser)
            .put(userController.updateUser);

        this.app
            .route("/api/user/:id")
            .get(Jwt.verifyToken, userController.listOneUsers)
            .delete(userController.deleUser)
            return this.app;
    }
}