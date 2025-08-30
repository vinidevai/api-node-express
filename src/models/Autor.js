import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      required: [true, 'O nome do autor e obrigatorio!'],
      maxlength: [48, 'O nome do autor deve ter no maximo 48 caracteres!']},
    nacionalidade: {
      type: String,
      maxlength: [24, 'A nacionalidade deve ter no maximo 24 caracteres!']}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model('autores', autorSchema);

export default autores;