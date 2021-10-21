import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";
import {container} from "tsyringe";

class ProfileUserController{
    async handle(request:Request, response:Response){
        const {user_id} = request;
        const service  = container.resolve(ProfileUserService);

        const result = await service.execute(user_id);

        return response.json(result);
    }
}

export {ProfileUserController}