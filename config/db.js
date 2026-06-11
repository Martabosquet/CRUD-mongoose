import "dotenv/config";
import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🚀 ¡Conexión exitosa a MongoDB Atlas!');
  } catch (error) {
    console.error('❌ Error de conexión a la base de datos:', error.message);
    process.exit(1);
  }
};