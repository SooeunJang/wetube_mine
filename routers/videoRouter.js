import express from "express";
import routes from "../routes";

 const videoRouter = express.Router();

 videoRouter.get(routes.videos, (res,req) => res.send("Videos"));
 videoRouter.get(routes.upload, (res,req) => res.send("Upload"));
 videoRouter.get(routes.videoDetail, (res,req) => res.send("VideoDetail"));
 videoRouter.get(routes.editProfile, (res,req) => res.send("EditProfile"));
 videoRouter.get(routes.deleteVideo, (res,req) => res.send("DeleteVideo"));

export default videoRouter;

