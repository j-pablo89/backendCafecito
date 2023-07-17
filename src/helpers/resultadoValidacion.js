import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    // validar los datos del body antes de pedir algo a la BD
    const errors = validationResult(req);
    //errors.isEmpty(); estrue cuando no hay errores, caso contrario devuelve false
    //si hay errores
    if(!errors.isEmpty()){
        return res.status(400).json({
            errores: errors.array()
        })
    }
    next();
}

export default resultadoValidacion;

