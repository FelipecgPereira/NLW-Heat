import {Router} from "express";


import { authenticateRoutes } from "./authenticate.routes";
import { messageRoutes } from "./message.routes";
import { profileRoutes } from "./profile.routes";


const router = Router();
router.use(authenticateRoutes);
router.use("/messages",messageRoutes)
router.use("/profile", profileRoutes)



export {router};