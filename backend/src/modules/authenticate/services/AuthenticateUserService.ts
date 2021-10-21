import axios from "axios";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IAuthenticateRepository } from "../repositories/IAuthenticateRepository";

interface IAccessTokenResponse{
    access_token: string;
}

interface IUserResponse{
    avatar_url: string;
    login: string;
    id: number;
    name: string;
}

@injectable()
class AuthenticateUserService{

    constructor(
        @inject("authenticateRepository")
        private usersRepository: IAuthenticateRepository
    ){}

    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token";

        const {data: accessTokenResponse} = await axios.post<IAccessTokenResponse>(url,null,{
            params:{
                client_id:process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers:{
                "Accept": "application/json"
            }
        })

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers:{
                authorization: `Bearer ${accessTokenResponse.access_token}`
            },
        });

        const {login, id,avatar_url, name} = response.data;

        let user = await this.usersRepository.findBy(id);

        if(!user){
            await this.usersRepository.create( { 
                github_id: id,
                login,
                avatar_url,
                name
            })

        }

        const token = sign({
            user:{
                name: user.name,
                avatar_url: avatar_url,
                id: user.id
            }
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn:"1d"
        }
        )

        return {token, user};
    }
}

export {AuthenticateUserService};