
import prismaClient from "../../../../shared/prisma";
import { IResponseUseDTO } from "../../dtos/IResponseUseDTO";
import { IProfileRepository } from "../../repositories/IProfileRepository";

class ProfileRepository implements IProfileRepository{
  async  findBy(user_id: string): Promise<IResponseUseDTO> {
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id,
            }
        })

        return user;
    }
}

export{ProfileRepository}