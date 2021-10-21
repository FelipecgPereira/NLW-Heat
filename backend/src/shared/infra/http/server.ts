import { serverHttp } from "./app"

serverHttp.listen(4000, ()=>{
    console.log(`🚀 Serve up port 4000!`)
})