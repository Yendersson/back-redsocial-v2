
export class Post{
    id_post: BigInt;
    contenido: String;
    fecha: Date;
    id_user: BigInt;
    image: String;

    constructor({id_post, contenido, fecha, id_user, image}){
        this.id_post = id_post;
        this.contenido = contenido;
        this.fecha = fecha;
        this.id_user = id_user;
        this.image = image;
    }
}