import express from 'express';
import * as notificacoesController from '../controllers/notificacoes.controller.js';

const router = express.Router();

router.post('/inscrever', notificacoesController.inscrever);
router.post('/enviar', notificacoesController.enviarNotificacoes);

export default router;
