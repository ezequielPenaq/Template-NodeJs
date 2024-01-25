/*const http = require('http')  // Aplicações http => APIs

                             // commonJS é uma importação que se utiliza => require. Porem é mais atual usar os Esmodules => import/export*/



                              //GET: Será utilizado para buscar informações
                              //POST: Será utilizado para criar informações
                              //PUT: Quando iremos atualizar / adicionar uma informação
                              //PATCH: Quando iremos atualizar uma informação unica ou especifica 
                              //DELETE: Quando vamos excluir uma informação

                             //cabeçalho(requisição,resposta) chamados de metadados [ sethead('','')]
                             import http from 'http';
                              import{randomUUID} from 'node:crypto'
                            import { json } from './middlewares/json.js';
                            import { Database } from './Database.js';

                            const database = new Database()

                             
                             const server = http.createServer(async (req, res) => {
                               const { method, url } = req;
                             
                               await json(req,res)
                             
                               res.setHeader('Access-Control-Allow-Origin', '*');
                             
                               if (method === 'GET' && url === '/users') {
                                
                                  const users=database.select('users')
                                 return res
                                   .setHeader('content-type', 'application/json')
                                   .end(JSON.stringify(users));
                               }
                             
                               if (method === 'POST' && url === '/users' && req.body) {
                                 const { name,email } = req.body;

                                 const user={      
                                  id:randomUUID(),
                                  name,
                                  email,
                                  }
                              
                                  database.insert('users', user)

                                 return res.writeHead(201).end();
                               }
                             
                               return res.writeHead(404).end();
                             });
                             
                             server.listen(3333);
                             