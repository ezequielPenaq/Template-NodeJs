/*const http = require('http')  // Aplicações http => APIs

                             // commonJS é uma importação que se utiliza => require. Porem é mais atual usar os Esmodules => import/export*/



                              //GET: Será utilizado para buscar informações
                              //POST: Será utilizado para criar informações
                              //PUT: Quando iremos atualizar / adicionar uma informação
                              //PATCH: Quando iremos atualizar uma informação unica ou especifica 
                              //DELETE: Quando vamos excluir uma informação

                             //cabeçalho(requisição,resposta) chamados de metadados [ sethead('','')]
                             import http from 'http';
                              
                            import { json } from './middlewares/json.js';
                            import { routes } from './routes.js';
                            import { exctractQueryParams } from './utilis/exctract-query-params.js';
                     


                             
                             const server = http.createServer(async (req, res) => {
                               const { method, url } = req;
                             
                               await json(req,res)
                             
                               const route = routes.find(route=>{
                                return route.method===method && route.path.test(url)
                               })
                               
                               if(route){
                                const routeParams= req.url.match(route.path)
                                
                                const {query, ...params} = routeParams.groups
                                
                                req.params= params
                                req.query=query?exctractQueryParams(query) : {}
                                //console.log(exctractQueryParams(routeParams.groups.query))

                                return route.handler(req, res)
                               }
                             
                               return res.writeHead(404).end();
                             });
                             
                             server.listen(3333);
                             