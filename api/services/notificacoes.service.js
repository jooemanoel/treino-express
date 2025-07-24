import webpush from 'web-push';
import * as notificacoesDAO from '../dao/notificacoes.dao.js';

// webpush.setVapidDetails(
//   'mailto:seu@email.com',
//   process.env.VAPID_PUBLIC_KEY,
//   process.env.VAPID_PRIVATE_KEY
// );

webpush.setVapidDetails(
  'mailto:seu@email.com',
  'BDEfUo6MA3abDv4OaTslDo_AR0RplooBTVB6kADJwzSWGGytvXFFnMwM1fXFDP-3nVVESFiYjJbv7uoN1iG0bxk',
  '0aKvintNJ7Aj4mz8nhjokLLRuCR3JruDrGfo80TgjRg'
);

export const salvarInscricao = async (subscription) => {
  await notificacoesDAO.salvar(subscription);
};

export const enviarParaTodos = async (payload) => {
  const subscricoes = await notificacoesDAO.listar();

  const notificacoes = subscricoes.map((sub) =>
    webpush.sendNotification(sub, JSON.stringify(payload)).catch((err) => {
      console.warn('Erro ao enviar para um cliente:', err.message);
    })
  );

  await Promise.all(notificacoes);
};
