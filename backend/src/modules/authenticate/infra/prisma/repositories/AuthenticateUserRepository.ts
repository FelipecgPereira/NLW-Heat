import { IAuthenticateRepository } from "../../../repositories/IAuthenticateRepository";
import { ICreateAuthenticateDTO } from "../../../dtos/ICreateAuthenticate";
import { IResponseAuthenticateDTO } from "../../../dtos/IResponseAuthenticate";
import prismaClient from "../../../../../shared/prisma";

class AuthenticateUserRepository implements IAuthenticateRepository{

    async  create({github_id,login,avatar_url,name}: ICreateAuthenticateDTO): Promise<void> {
        await prismaClient.user.create({
            data:{
                github_id,
                login,
                avatar_url,
                name
            }
        })
    }


    async findBy(id: number): Promise<IResponseAuthenticateDTO> {

       const user = await prismaClient.user.findFirst({
            where:{
                github_id: id
            }
        })

        return user;
    }


}

export {AuthenticateUserRepository}