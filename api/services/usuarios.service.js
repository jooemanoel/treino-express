import * as usuariosDAO from '../dao/usuarios.dao.js';

export const listarTodos = () => {
  return usuariosDAO.buscarTodos();
};

export const criar = ({ nome, senha }) => {
  if (!nome || !senha) {
    throw new Error('Nome e senha são obrigatórios.');
  }
  return usuariosDAO.inserir({ nome, senha });
};
