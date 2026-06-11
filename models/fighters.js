import "dotenv/config";
import { Schema, model } from 'mongoose';

const fighterSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del luchador es obligatorio'],
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'La edad es obligatoria']
  },
  country: {
    type: String,
    required: [true, 'El país de origen es obligatorio'],
    trim: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // Añade automáticamentecreatedAt y updatedAt
});

export const Fighter = model('Fighter', fighterSchema);