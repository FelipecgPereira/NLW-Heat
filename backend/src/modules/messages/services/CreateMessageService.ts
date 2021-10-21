import { inject } from 'tsyringe';
import { injectable } from 'tsyringe';
import { io } from '../../../shared/infra/http/app';
import { IMessagesRepository } from '../repositories/IMessagesRepository';


@injectable()
class CreateMessageService{

    constructor(
        @inject("messageRepository")
        private messageRepository: IMessagesRepository
    )
    {}
    
    async execute(text: string, user_id: string){

        const message = await this.messageRepository.create({text,user_id})

        const infoWS= {
            text: message.text,
            user_id: message.user_id,
            create_at: message.created_at,
            user:{
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }

        io.emit("new_message",infoWS);

        return message;
    }
}

export {CreateMessageService}