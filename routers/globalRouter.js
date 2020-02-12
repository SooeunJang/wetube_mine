import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (res,req) => res.send("Home"));
globalRouter.get(routes.join, (res,req) => res.send("Join"));
globalRouter.get(routes.login, (res,req) => res.send("Login"));
globalRouter.get(routes.logout, (res,req) => res.send("Logout"));
globalRouter.get(routes.search, (res,req) => res.send("Search"));

export default globalRouter;

