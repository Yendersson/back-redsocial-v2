
export class Login{
    email?:String;
    password?:String;

    constructor({email, password}){
        this.email = email;
        this.password = password;
    }
}
