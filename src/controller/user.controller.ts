
import express from "express";
import UserService from "../service/UserService";

class UserController{

    async listAllUsers(req: express.Request, res: express.Response){
        console.log("get")
        try {
            const users = await UserService.list();
            res.status(200).send(users);
            
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }

    async listOneUsers(req: express.Request, res: express.Response){
        const {id} = req.params;
        try {
            const users = await UserService.findOne(id);
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
            const user = await UserService.store(body);
            res.status(201).send(user);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async updateUser(req: express.Request, res: express.Response){

        const {body} = req;
        console.log(body);
        try {
            const user = await UserService.update(body);
            res.status(201).send(user);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async deleUser(req: express.Request, res: express.Response){

        const {id} = req.params;
        try {
            const user = await UserService.removeItem(id);
            res.status(201).send(user);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

}



export default new UserController();