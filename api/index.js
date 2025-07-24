// api/index.js

import 'dotenv/config'
import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js'
import notificacoesRoutes from './routes/notificacoes.routes.js';

const app = express()

app.use(express.json())
app.use('/usuarios', usuariosRoutes)
app.use('/notificacoes', notificacoesRoutes)
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Olá! Seja bem-vindo(a) à minha API Express.</h1>
      </body>
    </html>
  `);
});

export default app
