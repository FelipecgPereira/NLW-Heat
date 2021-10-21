import { container } from "tsyringe";
import { ProfileRepository } from "../../modules/accounts/infra/prisma/ProfileRepository";
import { IProfileRepository } from "../../modules/accounts/repositories/IProfileRepository";
import { AuthenticateUserRepository } from "../../modules/authenticate/infra/prisma/repositories/AuthenticateUserRepository";
import { IAuthenticateRepository } from "../../modules/authenticate/repositories/IAuthenticateRepository";
import { MessageRepositories } from "../../modules/messages/infra/prisma/repositories/MessageRepositories";
import { IMessagesRepository } from "../../modules/messages/repositories/IMessagesRepository";



container.registerSingleton<IAuthenticateRepository>(
    "authenticateRepository",
    AuthenticateUserRepository
)

container.registerSingleton<IMessagesRepository>(
    "messageRepository",
    MessageRepositories
)

container.registerSingleton<IProfileRepository>(
    "ProfileRepository",
    ProfileRepository
)





    
