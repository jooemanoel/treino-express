// api/routes/notificacoes.routes.js

import express from 'express';
import * as notificacoesController from '../controllers/notificacoes.controller.js';

const router = express.Router();

router.post('/subscrever', notificacoesController.inscrever);
router.post('/notificar', notificacoesController.enviarNotificacoes);

export default router;
