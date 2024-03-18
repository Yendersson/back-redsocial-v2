import express from 'express';
import { CommonRoutesConfig } from "./common.routes.config";
import authController from '../controller/auth.controller';

export class AuthRoutes extends CommonRoutesConfig{
    
    constructor(app: express.Application){
        super(app, 'AuthRoute');
    }

    configureRoutes(): express.Application {

        this.app
            .route("/api/auth")
            .post(authController.auth)
            return this.app;
    }
}
