import { Router } from "express";
import { crearProducto, obtenerProductos, obtenerProducto, borrarProducto } from '../controllers/productos.controllers';

const router = Router();

// app.get('/productos',(req, res) =>{
//    res.send('Se hizo la peticion get')
//    });

router
    .route('/productos')
    .get(obtenerProductos)
    .post(crearProducto); //tiene dos funciones GET y POST
router
    .route('/productos/:id')
    .get(obtenerProducto) //tiene dos funciones GET y POST
    .delete(borrarProducto)


export default router;