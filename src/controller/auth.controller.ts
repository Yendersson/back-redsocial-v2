
import express from 'express';
import LoginService from '../service/LoginService';

class AuthController {

    async auth(req: express.Request, res: express.Response) {
        const token = await LoginService.auth(req.body)

        if (token !== null) {
            res.status(203).send({error: null, token});
        } else {
            res.status(404).send({error: "Password ivalidate", token})
        };
    }

}

export default new AuthController();
