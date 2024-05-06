import { fileURLToPath } from 'url';
import path from 'path';

// Obteniendo la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
// Obteniendo la ruta del directorio padre del archivo
const __dirname = path.dirname(__filename);
// Definiendo la ruta de la carpeta de archivos HTML
const HTML_FOLDER = path.resolve(__dirname, '../views');

export const indexPrueba = (req, res) => {
    // Construyendo la ruta del archivo index.html
    const htmlFilePath = path.join(HTML_FOLDER, 'auth/index.html');
    res.sendFile(htmlFilePath);
}

export const aaa = (req, res) => {
    // Construyendo la ruta del archivo aaa.html prueba
    const htmlFilePath = path.join(HTML_FOLDER, 'auth/aaa.html');
    res.sendFile(htmlFilePath);
}