import 'dotenv/config';
import express from 'express';
import app from './app.js';
import routes from './routes/fighters.js';
import { dbConnection } from './config/db.js';

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));