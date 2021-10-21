import { ICreateMessageDTO } from "../dtos/ICreateMessageDTO";
import { IResponseMessageDTO } from "../dtos/IResponseMessageDTO";

interface IMessagesRepository{
    create(data: ICreateMessageDTO): Promise<IResponseMessageDTO>
    findMany(): Promise<IResponseMessageDTO[]>
}

export {IMessagesRepository}