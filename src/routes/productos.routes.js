import { Router } from "express";
import { crearProducto, obtenerProductos } from '../controllers/productos.controllers';

const router = Router();

// app.get('/productos',(req, res) =>{
//    res.send('Se hizo la peticion get')
//    });

router
    .route('/productos')
    .get(obtenerProductos)
    .post(crearProducto); //tiene dos funciones GET y POST



export default router;