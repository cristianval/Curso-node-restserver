import express from 'express';
import cors from 'cors';
import {router} from '../routes/usuarios.js'


class Server {

    constructor (){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();


        //rutas de mi aplicaion
        this.routes();
    }


    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo de lbody
        this.app.use(express.json());

        //direcctorio publico
        this.app.use(express.static('public'));


    }

    routes(){

        this.app.use(this.usuariosPath, router)
       
    }

    listen(){
      
        this.app.listen(this.port, ()=>{
        console.log(`Servicor Corriendo en el puerto ${this.port}`)
         })
    }

}

export {Server}