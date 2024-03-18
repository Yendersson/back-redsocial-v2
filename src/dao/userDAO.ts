import connectDB from '../../connectDB';
import { CreateUserDTO } from '../dto/user/CreateUserDTO';
import { UpdateUserDTO } from '../dto/user/UpdateUserDTO';
import { User } from '../entities/User';

class UserDAO{

    async findAll(): Promise<any> {

        return new Promise((resolve, rejects) => {
            const query: string = "SELECT * FROM user";
            connectDB.con.query(query, (error, results, fields) => {
                if (error) rejects(error);
                
                resolve(results);
            });
        })
        
    }

    async findOneById(id: String): Promise<User>{
        const query: string = "SELECT * FROM user WHERE ID_USER = ?";

        return new Promise((resolver, rejects) => {
            let user:any;
            connectDB.con.query(query, [id], (error, results, fields) => {
                if (error) {
                    rejects(error);
                } else {
                    if (results){
                        user = new User(results[0]);
                        resolver(user);
                    } else {
                        user = null;
                        resolver(user);
                    }
                }
            })
        })
    }

    async store(user: CreateUserDTO): Promise<User>{
        return new Promise((resolve, reject) => {
            const query: string = "INSERT INTO user (EMAIL, NOMBRE, USERNAME, PASSWORD, IMAGE) VALUES(?, ?, ?, ?, ?)";

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

    async update(user: UpdateUserDTO): Promise<User>{
        const query: string = "UPDATE user SET EMAIL = ?, NOMBRE = ?, USERNAME = ?, PASSWORD = ?, IMAGE = ?  WHERE ID_USER= ?";

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

export default new UserDAO();