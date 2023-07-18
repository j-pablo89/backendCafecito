import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [ // VALIDACIONES DE INGRESO DE DATOS
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
  .custom((value)=>{   //Custom es para personalizar una funcion
      if(value >= 1 && value <= 10000){
          return true;
      }else{
          throw new Error('El precio debe estar entre 1 y 10000');
      }
  }),
check("imagen")
  .notEmpty()
  .withMessage('La URL de la imagen es obligatoria')
  .matches(/^https?:\/\/(?:[a-zA-Z]+)(?:\.[a-zA-Z]+)+\S*(?:\.jpg|\.jpeg|\.png|\.bpm|\.gif)$/) //Usamos este metodo para expresion regular de url
  .withMessage('Debe ser una URL de imagen valida, con extension (png|jpe?g|gif|bmp)'),
check("categoria")
  .notEmpty()
  .withMessage('La categoria es obligatoria')
  .isIn(["bebida caliente","bebida fria","dulce","salado"]) //Usamos este metodo cuando tenemos opciones de un select, volcamos dichas opciones en un ARRAY
  .withMessage('Debe ingresar una categoria valida'),
  (req, res, next)=>{ resultadoValidacion(req,res,next)}
]

export default validarProducto;