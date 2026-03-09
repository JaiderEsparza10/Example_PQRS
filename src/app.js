import express from 'express';
import rutaspqrs from './routes/pqrsRoutes.js';

const app = express();
const puerto = 3000;


app.use(express.json());

app.use('./pqrs', rutaspqrs);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${puerto}`);
    
})