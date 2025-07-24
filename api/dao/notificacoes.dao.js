// api/dao/notificacoes.dao.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6D-EiO-Bi6wb7fePa-FLnIE3NqY62BjM',
  authDomain: 'testebd-80d9e.firebaseapp.com',
  projectId: 'testebd-80d9e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colecao = collection(db, 'subscricoes');

export const salvar = async (subscription) => {
  const q = query(colecao, where('endpoint', '==', subscription.endpoint));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    await addDoc(colecao, subscription);
    console.log('Inscrição salva com sucesso no Firestore.');
  } else {
    console.log('Inscrição já existe. Ignorada.');
  }
};

export const listar = async () => {
  const snapshot = await getDocs(colecao);
  return snapshot.docs.map((doc) => doc.data());
};
