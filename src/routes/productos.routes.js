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
        .withMessage('El nombre del producto es obligatorio')
        .isLength({min: 2, max:100})
        .withMessage('El nombre del producto debe tener entre 2 y 100 caracteres como maximo'),
      check("precio")
        .notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser numérico')
        .custom((value)=>{
            if(value >= 1 && value <= 10000){
                return true;
            }else{
                throw new Error('El precio debe estar entre 1 y 10000');
            }
        }),
      check("imagen")
        .notEmpty()
        .withMessage('La URL de la imagen es obligatoria')
        .matches(/^https?:\/\/(?:[a-zA-Z]+)(?:\.[a-zA-Z]+)+\S*(?:\.jpg|\.jpeg|\.png|\.bpm|\.gif)$/)
        .withMessage('Debe ser una URL de imagen valida, con extension (png|jpe?g|gif|bmp)')
    ],
    crearProducto
  ); //tiene dos funciones GET y POST
router
  .route("/productos/:id")
  .get(obtenerProducto) //tiene dos funciones GET y POST
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
