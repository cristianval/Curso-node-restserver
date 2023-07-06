import { Router } from "express";
import { usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut } from "../controller/usuarios.js";

export const router = Router();


router.get('/', usuariosGet);

router.put('/',usuariosPut);

router.post('/:id', usuariosPost);

router.delete('/',usuariosDelete);

router.patch('/', usuariosPatch);




//export { router};