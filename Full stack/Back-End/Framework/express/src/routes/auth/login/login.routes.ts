import { Router } from "../../../../config/common.config";
import { userReg_Post } from "../../../controller";
import { userlogin_Post } from "../../../controller/auth/login/login.Ctrl";


Router.route('/login')
.post(userlogin_Post)
module.exports=Router