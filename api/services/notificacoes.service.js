// api/services/notificacoes.service.js

import webpush from 'web-push';
import * as notificacoesDAO from '../dao/notificacoes.dao.js';

webpush.setVapidDetails(
  'mailto:seu@email.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export const salvarInscricao = async (subscription) => {
  await notificacoesDAO.salvar(subscription);
};

export const enviarParaTodos = async (payload) => {
  console.log('🔔 Enviando notificações para todos os inscritos...');
  console.log('📦 Payload:', JSON.stringify(payload));

  if (!payload || !payload.title || !payload.body) {
    throw new Error('❌ Payload inválido. Deve conter title e body.');
  }

  const subscricoes = await notificacoesDAO.listar();
  console.log(`👥 Total de inscritos encontrados: ${subscricoes.length}`);

  const notificacoes = subscricoes.map((sub) =>
    webpush.sendNotification(sub, JSON.stringify(payload))
      .then(() => {
        console.log('✅ Notificação enviada para:', sub.endpoint);
      })
      .catch(async (err) => {
        const status = err.statusCode || 'sem código';
        const msg = err.body || err.message;

        console.warn(`⚠️ Erro ao enviar para: ${sub.endpoint}`);
        console.warn(`   ↪ Código HTTP: ${status}`);
        console.warn(`   ↪ Mensagem: ${msg}`);

        // Exemplo opcional: se o erro for 410 ou 404, pode remover a inscrição do banco
        if (status === 410 || status === 404) {
          console.log('🗑️ Removendo inscrição expirada...');
          await notificacoesDAO.remover(sub);  // você precisará implementar isso
        }
      })
  );

  await Promise.all(notificacoes);
  console.log('✅ Todas as tentativas de envio finalizadas.');
};
