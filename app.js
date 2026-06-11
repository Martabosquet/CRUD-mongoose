import express from 'express';
import fighterRoutes from './routes/fighters.js';

const app = express();

// Middleware esencial para poder leer JSON enviados en el body de Postman
app.use(express.json());

// Ruta base para el recurso de la API
app.use('/', fighterRoutes);

// Manejo básico de rutas inexistentes en el servidor
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada en la API' });
});

export default app;