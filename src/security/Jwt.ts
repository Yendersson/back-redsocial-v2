import jwt from 'jsonwebtoken';
import express from 'express';

export class Jwt{
     static key:string = `miclaveultrasecreta123*`;

    async generateToken(payload: {check:boolean, email: string}):Promise<any> { 

        return new Promise((resolve, reject) => {
            const token =  jwt.sign(payload, Jwt.key,{
                expiresIn: 1440
            });

            resolve(token);
        })
    }

    static verifyToken(req: express.Request, res: express.Response, next: express.NextFunction){
        const token = req.headers['authorization'];
        if (token) {
            jwt.verify(token, Jwt.key, (err, decoded) => {
                if (err) {
                    return res.json({msg: 'Token invalido'});
                } else {
                    console.log(decoded);
                    next();
                }
            })
        } else {
            throw new Error;
        }
    }
}