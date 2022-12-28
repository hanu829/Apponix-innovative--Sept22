import { Router } from "../../../../config/commom.config";
import { userReg_Post } from "../../../controller";


Router.route('/register')
.post(userReg_Post)
module.exports=Router