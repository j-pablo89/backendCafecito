import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from "path";

//usar un puerto
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto: '+app.get('port'));
});

//middlewares: funciones que se ejecutan antes de las rutas
app.use(cors()); // permitir conexiones remotas
app.use(express.json()) // permitir a mi aplicacion recibir objetos de tipo json en los request
app.use(morgan('dev')); // me muestra en la consola informacion extra de las solicitudes GET, POST, PUT, etc.
console.log(__dirname); // la variable __dirname siempre devuelve la ruta donde esta alojado el proyecto
app.use(express.static(path.join(__dirname, '/public'))); // esto nos permite poder ejecutar los archivos estaticos de mi proyuecto en la ruta raiz de mi backend ej: http://localhost:4000
// http://localhost:4000


//rutas
