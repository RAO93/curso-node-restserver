const express = require('express')
const cors = require('cors');


class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //MIDDLEWARES
        this.middlewares();

        //RUTAS

        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //LECTURA Y PARSEO DEL BODY (EL BODY SON LOS DATOS QUE NOS LLEGAN DESDE EL CLIENTE)
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public'));
    }

    routes() {
       this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }


}

module.exports = Server;