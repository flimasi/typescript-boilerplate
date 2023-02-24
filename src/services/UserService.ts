import { UserModel } from "@models/UserModel"

export class userService{
    handle(){
        const user = new UserModel();
        console.log(user);
    }
}

export default userService