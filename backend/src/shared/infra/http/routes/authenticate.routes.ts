import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/authenticate/controllers/AuthenticateUserController";

const authenticateRoutes  = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/authenticate", authenticateUserController.handle)

export{authenticateRoutes}