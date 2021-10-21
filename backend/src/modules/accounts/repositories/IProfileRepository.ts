import { IResponseUseDTO } from "../dtos/IResponseUseDTO";

interface IProfileRepository{
    findBy(user_id: string): Promise<IResponseUseDTO>
}

export{IProfileRepository}