import { inject, injectable } from 'tsyringe';
import{IProfileRepository} from "../repositories/IProfileRepository"


@injectable()
class ProfileUserService{

    constructor(
        @inject("ProfileRepository")
        private profileRepository : IProfileRepository
    ){}

    async execute(user_id: string){
       const user = await this.profileRepository.findBy(user_id);

       return user;
    }
}
export {ProfileUserService}