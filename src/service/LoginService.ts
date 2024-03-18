import { Jwt } from "../security/Jwt";

class LoginService{

    async auth({email, password}){
        if(email === "pepito@mail.com" && password === "123456") {
            console.log("CORRECTO");
            const payload = {check: true, email};
            const jwt = new Jwt;
            const token = await jwt.generateToken(payload);

            return token;
        } else {
            return null;
        }
    }
}

export default new LoginService();