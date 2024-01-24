//stdin => stream de leitura
// stdout => stream de escrita 


/*process.stdin
.pipe(process.stdout)*/

import{Readable,Writable,Transform } from 'node: stream'

class OneToHoundredStream extends Readable{
    
    index=1
    
    _read(){
        let i = this.index++

        if (i>100){
            this.push(null)
        }
        else{
            const buf = buffer.from(string(i))
            this.push(buff)
          
        }
    }
}
 


class InverseNumberStream extends Transform{

        _transform(chunk,encoding,callback){
            let transformed = Number(chunk.ToString())*-1

            callback(null, buffer.from(String(transformed)))
        }

}




 class MultiplyByTenStream extends Writable{
    _write(chunky, encoding, callback){
        console.log(Number(chunk.ToString())* 10)
        callback()
    }
}



new OneToHoundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())