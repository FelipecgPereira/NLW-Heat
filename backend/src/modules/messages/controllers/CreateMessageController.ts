import { Request, Response } from "express";
import { io } from "../../../shared/infra/http/app";
import { CreateMessageService } from "../services/CreateMessageService";
import {container} from "tsyringe";

class CreateMessageController{
    async handle(request:Request, response:Response){
        const {message} = request.body;
        const {user_id} = request;

        const service = container.resolve(CreateMessageService);

        const result = await service.execute(message, user_id);
        

        return response.json(result);
    }
}

export {CreateMessageController}