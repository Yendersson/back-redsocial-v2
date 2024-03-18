import userDAO from "../dao/userDAO";
import { CreateUserDTO } from "../dto/user/CreateUserDTO";
import { UpdateUserDTO } from "../dto/user/UpdateUserDTO";

class UserService{

    async list(){
        const useList = await userDAO.findAll(); 
        console.log(useList)
        return useList;
    }

    async findOne(id_user){
        const useList = await userDAO.findOneById(id_user); 
        console.log(useList)
        return useList;
    }

    async store(user: CreateUserDTO){
        return userDAO.store(user);
    }

    async update(user: UpdateUserDTO) {
        return userDAO.update(user);
    }

    async removeItem(id_user: any){
        return userDAO.removeItem(id_user);
    }
}


export default new UserService();