import { Router } from "express";
import { CreateMessageController } from "../../../../modules/messages/controllers/CreateMessageController";
import { GetLastThreeMessagesController } from "../../../../modules/messages/controllers/GetLastThreeMessagesController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";


const messageRoutes = Router();

const createMessageController = new CreateMessageController();
const getLastThreeMessagesController =  new GetLastThreeMessagesController();

messageRoutes.post("/", ensureAuthenticated,createMessageController.handle)
messageRoutes.get("/lastthree",getLastThreeMessagesController.handle)


export{messageRoutes}
