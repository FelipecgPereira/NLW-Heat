import { injectable } from 'tsyringe';
import { inject } from 'tsyringe';
import { IMessagesRepository } from '../repositories/IMessagesRepository';

@injectable()
class GetLastThreeMessagesService{

    
    constructor(
        @inject("messageRepository")
        private messageRepository: IMessagesRepository
    )
    {}

    async execute(){
       
        const messages =  await this.messageRepository.findMany();

        return messages;
    }
}
export {GetLastThreeMessagesService}