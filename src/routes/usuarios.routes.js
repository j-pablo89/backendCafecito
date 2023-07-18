import { Router } from "express";
import { crearUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuario.controllers";

const router = Router();

// todo: agregar las validaciones a las cuentas de usuario

router.route('/').get(obtenerUsuarios);
router.route('/usuario/:id').get(obtenerUsuario);
router.route('/nuevo').post(crearUsuario);

export default router;