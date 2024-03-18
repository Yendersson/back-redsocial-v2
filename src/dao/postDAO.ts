import connectDB from "../../connectDB";
import { CreatePostDTO } from "../dto/post/CreatePostDTO";
import { UpdatePostDTO } from "../dto/post/UpdatePostDTO";
import { Post } from "../entities/Post";

class PostDAO{

    async findAll(): Promise<any> {

        return new Promise((resolve, rejects) => {
            const query: string = `SELECT user.USERNAME, user.IMAGE, post.* FROM post
            INNER JOIN user ON user.ID_USER = post.ID_USER`;
            connectDB.con.query(query, (error, results, fields) => {
                if (error) rejects(error);
                
                resolve(results);
            });
        })
    }

    async findOneById(id: String): Promise<Post>{
        const query: string = `SELECT user.USERNAME, user.IMAGE, post.* FROM post
        INNER JOIN user ON user.ID_USER = post.ID_USER
        WHERE post.ID_USER = ?`;

        return new Promise((resolver, rejects) => {
            let post:any;
            connectDB.con.query(query, [id], (error, results, fields) => {
                if (error) {
                    rejects(error);
                } else {
                    if (results){
                        post = new Post(results[0]);
                        resolver(post);
                    } else {
                        post = null;
                        resolver(post);
                    }
                }
            })
        })
    }

    async store(user: CreatePostDTO): Promise<Post>{
        return new Promise((resolve, reject) => {
            const query: string = "INSERT INTO post(CONTENIDO, FECHA, ID_USER, IMAGE) VALUES(?,?,?,?)";

            connectDB.con.query(query, Object.values(user), (error, results, fields) => {
                if(error) reject(error);

                if(results) {
                    resolve(results[0]);
                }else{
                    reject(null);
                }
            })
        })
    }

    async update(user: UpdatePostDTO): Promise<Post>{
        const query: string = "UPDATE post SET CONTENIDO = ?, IMAGE = ? WHERE ID_POST = ? AND ID_USER = ?";

        return new Promise((resolve, reject) => {
            connectDB.con.query(query, Object.values(user), (error, results, field) => {
                if (error) reject(error);

                if(results) {
                    resolve(results[0]);
                } else {
                    reject(null);
                }
            })
        })
    }

    async removeItem(id_user: any): Promise<any>{
        return new Promise((resolve, reject) => {
            const query: string = "DELETE FROM user WHERE ID_USER = ?";
            connectDB.con.query(query, [id_user], (error, results, field) => {
                if(error) reject(error);

                if(results){
                    resolve("Eliminado el usuario: " + id_user)
                } else {
                    reject(null);
                }
            })
        })
    }
}

export default new PostDAO();