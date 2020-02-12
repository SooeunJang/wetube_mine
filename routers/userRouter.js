import express from "express";
import routes from "../routes"
import { users, userDetail, editProfile, changePassword } from "../controllers/userControllers";

 const userRouter = express.Router();

 userRouter.get(routes.users, users); //(res,req) => res.send("Users"));
 userRouter.get(routes.userDetail, userDetail); //(res,req) => res.send("UserDetail"));
 userRouter.get(routes.editProfile, editProfile);//(res,req) => res.send("EditProfile"));
 userRouter.get(routes.changePassword, changePassword); //(res,req) => res.send("ChangePassword"));

export default userRouter;

// userRouter.get("/", (req, res) => res.send("user index") );
// userRouter.get("/edit", (req, res) => res.send("user edit") );
// userRouter.get("/password", (req, res) => res.send("user password") );