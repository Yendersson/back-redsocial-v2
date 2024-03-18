export class User {

    id_user: BigInt;
    email: String;
    nombre: String;
    username: String;
    password: String;
    image: String;

    constructor({id_user, email, nombre, username, password, image}){
        this.id_user = id_user;
        this.email = email;
        this.nombre = nombre;
        this.username = username;
        this.password = password;
        this.image = image;
    }
}