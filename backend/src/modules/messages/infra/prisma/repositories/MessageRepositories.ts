
import prismaClient from "../../../../../shared/prisma";
import { ICreateMessageDTO } from "../../../dtos/ICreateMessageDTO";
import { IResponseMessageDTO } from "../../../dtos/IResponseMessageDTO";
import { IMessagesRepository } from "../../../repositories/IMessagesRepository";


class MessageRepositories implements IMessagesRepository{
    async create({text,user_id}: ICreateMessageDTO): Promise<IResponseMessageDTO> {
        const message = await prismaClient.message.create({
            data:{
                text,
                user_id
            },
            include:{
                user: true,
            }
        })

        return message;
    }


   async findMany(): Promise<IResponseMessageDTO[]> {
    const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy:{
                created_at:"desc",
            },
            include:{
                user: true,
            }
        })

        return messages;
    }

 

}

export {MessageRepositories}