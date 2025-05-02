const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Prueba tecnica de InterSeguros</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f7f7f7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: #fff;
          padding: 2rem 3rem;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          text-align: center;
        }
        img {
          width: 180px;
          margin-bottom: 1.5rem;
        }
        h1 {
          color: #1a237e;
          margin-bottom: 0.5rem;
        }
        p {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://grupoficom.com/wp-content/uploads/2024/05/interseguro-logo.png" alt="InterSeguros Logo" />
        <h1>¡Prueba tecnica de InterSeguros!</h1>
        <p>Tu aplicación Node.js está corriendo correctamente 🚀</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
