import express from 'express';
import * as usuariosController from '../controllers/usuarios.controller.js';

const router = express.Router();

router.get('/', usuariosController.listarUsuarios);
router.post('/', usuariosController.criarUsuario);

export default router;
