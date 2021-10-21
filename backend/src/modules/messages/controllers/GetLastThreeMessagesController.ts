import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/GetLastThreeMessagesService";
import {container} from "tsyringe";

class GetLastThreeMessagesController{
    async handle(request:Request, response:Response){
       
        const service  = container.resolve(GetLastThreeMessagesService);

        const result = await service.execute();

        return response.json(result);
    }
}

export {GetLastThreeMessagesController}