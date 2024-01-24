/*const http = require('http')  // Aplicações http => APIs

                             // commonJS é uma importação que se utiliza => require. Porem é mais atual usar os Esmodules => import/export*/



                              //GET: Será utilizado para buscar informações
                              //POST: Será utilizado para criar informações
                              //PUT: Quando iremos atualizar / adicionar uma informação
                              //PATCH: Quando iremos atualizar uma informação unica ou especifica 
                              //DELETE: Quando vamos excluir uma informação

                             //cabeçalho(requisição,resposta) chamados de metadados [ sethead('','')]
 import http from 'http'  
 
         const users=[]


 const server =http.createServer((req,res)=>{
      const {method,url}=req
      
      
      if(method==='GET' && url==='/users'){
         return res
         .setHeader('content-type','application/JSON')
         .end(JSON.stringify(users ))
      }

      if(method==='POST' && url==='/users'){

         users.push({
            id: 1,
            name:'zecão da massa',
            email:'zeca@exemple.com',
         })

         return res.writeHead(201).end()
      }

    return res.writeHead(404).end()

 })

 server.listen(3333)