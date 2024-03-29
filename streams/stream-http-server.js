import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{

    _transform(chunk,encoding,callback){
        const transformed = Number(chunk.ToString())*-1
        console.log(transformed)

        callback(null, buffers.from(String(transformed)))
    }

}


//req === readblestream
//res === writablestream




const server = CreatServer(async(req,res)=>{
        const buffers=[]

        for await(const chunk of req){
        buffers.push(chunk)
        }

        const fullStreamContent = buffers.concat(buffers).toString()

        console.log(fullStreamContent)


        return res.end(fullStreamContent)


        //return req
        //.pipe(new InverseNumberStream())
        //.pipe(res)


}) 



server.listen(3334)