import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Одоогийн хавтасны замыг тодорхойлох
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTML, CSS, JS болон зураг, дуу зэрэг статик файлуудыг агуулах хавтсыг зааж өгөх
// Хэрэв таны файлууд "public" гэсэн хавтсан дотор байгаа бол 'public' гэж өөрчилнө үү.
// Одоогоор үндсэн хавтсаас (root) уншихаар тохируулав.
app.use(express.static(__dirname));

// Үндсэн хаягаар ороход index.html хуудсыг харуулна
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Серверийг асаах
app.listen(PORT, () => {
    console.log(`🚀 Сервер амжилттай аслаа: http://localhost:${PORT}`);
});