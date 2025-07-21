import 'dotenv/config'
import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js' // ajuste o caminho conforme sua estrutura

const app = express()

app.use(express.json())
app.use('/usuarios', usuariosRoutes)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Saudação</title>
        <meta charset="UTF-8" />
      </head>
      <body>
        <h1>Olá! Seja bem-vindo(a) à minha API Express.</h1>
      </body>
    </html>
  `);
});

export default app
