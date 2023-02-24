import { UserModel } from "@models/UserModel"

export class userController{
    handle(){
        const user = new UserModel();
        console.log(user);
    }
}

export default userController