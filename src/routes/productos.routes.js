import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";
import validarProducto from "../helpers/validacionProducto";

const router = Router();

// app.get('/productos',(req, res) =>{
//    res.send('Se hizo la peticion get')
//    });

router
  .route("/productos")
  .get(obtenerProductos)
  .post(validarProducto,crearProducto); //tiene dos funciones GET y POST
router
  .route("/productos/:id")
  .get(obtenerProducto) //tiene dos funciones GET y POST
  .delete(borrarProducto)
  .put(validarProducto,editarProducto);

export default router;
