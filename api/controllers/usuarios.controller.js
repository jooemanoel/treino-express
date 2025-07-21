import * as usuariosService from '../services/usuarios.service.js';

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosService.listarTodos();
    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ erro: 'Erro ao buscar usuários.', detalhes: err.message });
  }
};


export const criarUsuario = async (req, res) => {
  try {
    const novoUsuario = await usuariosService.criar(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário.' });
  }
};
