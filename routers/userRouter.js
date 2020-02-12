import express from "express";
import routes from "../routes"

 const userRouter = express.Router();

 userRouter.get(routes.users, (res,req) => res.send("Users"));
 userRouter.get(routes.userDetail, (res,req) => res.send("UserDetail"));
 userRouter.get(routes.editProfile, (res,req) => res.send("EditProfile"));
 userRouter.get(routes.changePassword, (res,req) => res.send("ChangePassword"));

export default userRouter;

// userRouter.get("/", (req, res) => res.send("user index") );
// userRouter.get("/edit", (req, res) => res.send("user edit") );
// userRouter.get("/password", (req, res) => res.send("user password") );