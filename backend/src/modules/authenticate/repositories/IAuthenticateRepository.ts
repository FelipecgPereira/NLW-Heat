import { ICreateAuthenticateDTO } from "../dtos/ICreateAuthenticate";
import { IResponseAuthenticateDTO } from "../dtos/IResponseAuthenticate";

interface IAuthenticateRepository{
    create(data: ICreateAuthenticateDTO): Promise<void>
    findBy(id: number): Promise<IResponseAuthenticateDTO>
}

export {IAuthenticateRepository}