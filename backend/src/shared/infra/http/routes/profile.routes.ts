import { Router } from "express";
import { ProfileUserController } from "../../../../modules/accounts/controllers/ProfileUserController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const profileRoutes  = Router();

const profileUserController = new ProfileUserController();


profileRoutes.get("/", ensureAuthenticated,profileUserController.handle)


export{profileRoutes}