import sql from '../config/db.js';

export const buscarTodos = async () => {
  return await sql`SELECT id_usuario, nome FROM usuarios`;
};

export const inserir = async ({ nome, senha }) => {
  const [usuario] = await sql`
    INSERT INTO usuarios (nome, senha)
    VALUES (${nome}, ${senha})
    RETURNING id_usuario, nome`;
  return usuario;
};
