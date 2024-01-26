
import{randomUUID} from 'node:crypto'
import { Database } from './Database.js';
import { buildRoutePath } from './utilis/build-route-path.js';
const database = new Database()
export const routes = [                                                                      //Query Parameters: URL stateful (busca de endereço)==> tal como filtros.
                                                                                            // Route Parametes:Identificação de recursos utilizando os metodo HTTP 
                                                                                            //Request Body: Envio de informações de um formulário 


    {
        method: 'GET',
        path: buildRoutePath( '/users'),
        handler: (req,res)=>{
            const {search} =req.query
            
            const users=database.select('/users',  search ? {
                name:search,
                email: search
            } : null)


            return res
            .end(JSON.stringify(users,{}));
        }
    },{
        method: 'POST',
        path: buildRoutePath ('/users'),
        handler: (req,res)=>{
            const { name,email } = req.body;

                                 const user={      
                                  id:randomUUID(),
                                  name,
                                  email,
                                  }
                              
                                  database.insert('/users', user)

                                 return res.writeHead(201).end();
        }
    }, 
    {
        method: 'PUT',
        path: buildRoutePath ('/users/:id'),
        handler:(req,res)=>{

            const{id}=req.params
            const {name,email}=req.body

            database.update('users', id, {
                name,email,
            })

            return res.writeHead(204).end()
        }
        
    },
    {
        method: 'DELETE',
        path: buildRoutePath ('/users/:id'),
        handler:(req,res)=>{

            const{id}=req.params

            database.delete('users', id)

            return res.writeHead(204).end()
        }
        
    }
    

]
Server.listen(3333);