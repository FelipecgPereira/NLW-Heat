interface IUser{
    id: string,
    name: string,
    github_id:number,
    avatar_url:string,
    login:string,
}

interface IResponseMessageDTO{
    id: string,
    text: string, 
    created_at: Date,
    user:IUser,
    user_id:string
}

export{IResponseMessageDTO}