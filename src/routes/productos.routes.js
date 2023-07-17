import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

// app.get('/productos',(req, res) =>{
//    res.send('Se hizo la peticion get')
//    });

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [ // VALIDACIONES DE INGRESO DE DATOS
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({min: 2, max:100})
        .withMessage('El nombre del producto debe tener entre 2 y 100 caracteres como maximo')
    ],
    crearProducto
  ); //tiene dos funciones GET y POST
router
  .route("/productos/:id")
  .get(obtenerProducto) //tiene dos funciones GET y POST
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
