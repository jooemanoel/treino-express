//api/controllers/notificacoes.controller.js

import * as notificacoesService from '../services/notificacoes.service.js';

export const inscrever = async (req, res) => {
  try {
    const subscription = req.body;
    await notificacoesService.salvarInscricao(subscription);
    res.status(201).json({ mensagem: 'Inscrição salva com sucesso.' });
  } catch (err) {
    console.error('Erro ao salvar inscrição:', err);
    res.status(500).json({ erro: 'Erro ao salvar inscrição.' });
  }
};

export const enviarNotificacoes = async (req, res) => {
  console.log('Requisição para enviar notificações recebida:', req.body);
  const { titulo, corpo } = req.body;
  try {
    await notificacoesService.enviarParaTodos({ title: titulo, body: corpo });
    res.json({ mensagem: 'Notificações enviadas.' });
  } catch (err) {
    console.error('Erro ao enviar notificações:', err);
    res.status(500).json({ erro: 'Erro ao enviar notificações.' });
  }
};
