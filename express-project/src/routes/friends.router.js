import express from "express";
import { getFriends, postFriends, getOneFriend } from "../controllers/friends.controller.js";

const friendsRouter = express.Router();

friendsRouter.use((req,res,next) => {
  console.log("ip address:", req.ip);
  next();
});

friendsRouter.post('/',postFriends)
friendsRouter.get('/',getFriends);
friendsRouter.get('/:friendId', getOneFriend);

export default friendsRouter;