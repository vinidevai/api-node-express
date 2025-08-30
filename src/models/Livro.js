import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, 'O título do livro é obrigatorio!'],
      maxlength: [48, 'O titulo deve ter no maximo 48 caracteres!']},
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores', 
      required: [true, 'O id do autor é obrigatorio!'],
      autopopulate: {select: 'nome'}
    },
    editora: {
      type: String, 
      required: [true, 'O nome da editora é obrigatorio!'],
      maxlength: [48, 'A editora deve ter no maximo 48 caracteres!']},
    preco: {
      type: Number,
      validate: {
        validator: (value) => {
          return value >= 5 && value <= 5000;
        },
        message: 'O preço do livro deve estar entre R$ 5,00 e R$ 5.000,00!'
      }
    },
    paginas: {
      type: Number,
      validate: {
        validator: (value) => {
          return value >= 10 && value <= 5000;
        },
        message: 'O numero de paginas deve estar entre 10 e 5000!'
      }
    }
  },
  {
    versionKey: false
  }
);

livroSchema.plugin(autopopulate);
const livros= mongoose.model('livros', livroSchema);

export default livros;