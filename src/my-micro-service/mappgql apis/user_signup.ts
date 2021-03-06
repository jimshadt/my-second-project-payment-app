import * as bcrypt from "bcrypt";
import users from "../db-schemas/users";
import { myAssert } from "../helpers/Error_Handler";
const { GraphQLError } = require("graphql");
const saltRounds = 10;



const user_signup = async (args: any, req: any) => {
    try {
        let obj1:any = await users.findOne({ email: args.email }).lean().exec();
        let obj2:any = await users.findOne({ username: args.username }).lean().exec();

        myAssert(obj1,"email already registered")
        myAssert(obj2,"username already exists")
        myAssert(args.password.length < 5,"password must have atleast 5 charecter")
        
            await bcrypt.hash(args.password,saltRounds,function(err,hash){
                args.password = hash                        
                users.create(args)
            })
            return { message: "user account created" };
            
    } catch (err) {
        throw new GraphQLError(err.message, null, null, null);
    }
}

export default user_signup;