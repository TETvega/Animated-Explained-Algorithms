
import express from 'express';

import { indexPrueba } from '/src/controllers/userController.js';

// Crear Server
const app = express();
// Rutas
app.use('/index', indexPrueba)
// 'use' se usa para usar varias rutas
// 'get' se usa para usar UNA RUTA nada mas


app.set('views', './src/views')

// Carpeta Publica
app.use(express.static('./public'));

// Definir un puerto para el servidor o aplicacion
const port = 3000; // puede ser cualquier numero, solo que sea de 80 a 80000

// Iniciar Servidor
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto: ${port}`);
})