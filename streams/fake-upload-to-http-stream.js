import {Readable} from 'node:stream'


class OneToHoundredStream extends Readable{
    
    index=1
    
    _read(){
        let i = this.index++

        setTimeout(() => {
            
    
        if (i>5){
            this.push(null)
        }
        else{
            const buf = buffer.from(string(i))
            this.push(buff)
          
        }
    },1000)
 }
}





 
fetch('http://localhost:3334',{

    method: 'POST',
    body: new OneToHoundredStream(),


}).then(response=>{
   return response.text()

}) .then (data=>{
    console.log(data)
})