import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import {container} from "tsyringe";


class AuthenticateUserController{
    async handle(request:Request, response:Response){
        const {code} = request.body;
        const service = container.resolve(AuthenticateUserService) ;
       try {
        const result = await service.execute(code);
        return response.json(result);
       } catch (err) {
           return response.status(err.response.status).json(err.message);
       }
    }
}

export {AuthenticateUserController}