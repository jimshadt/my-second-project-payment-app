import admin_signup from "./mappgql apis/admin_signup";
import admin_login from "./mappgql apis/admin_login";
import user_signup from "./mappgql apis/user_signup";
import user_login from "./mappgql apis/user_login";
import admin_wallet from "./mappgql apis/admin_wallet";
import wallet_listing from "./mappgql apis/wallet_listing";
import { verifyUser } from "./Decorators/verify_user_token";
import Config from "./config"

export default class MAPPGQL {
    params: any;
    constructor(params: any) {
        this.params = params;
    }

    async health() {
        return { status: "ok" };
        
        
    }

    async user_signup(args: any, req: any){
        return await user_signup(args,req)
    }

    async user_login(args: any, req: any){
        
        return await user_login(args,req)
    }
    
    async admin_signup(args: any, req: any){
        return await admin_signup(args,req)
    }

    async admin_login(args: any, req: any){
        return await admin_login(args,req)
    }

    //@verifyUser(Config.get("account_type:user"))
    async admin_wallet(args: any, req: any, user:any){
        return await admin_wallet(args,req,user)
    }

    //@verifyUser(Config.get("account_type:user"))
    async wallet_listing(args: any, req: any,user:any){
        return await wallet_listing(args,req,user)
    }


}

