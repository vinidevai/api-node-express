import mongoose from 'mongoose';
import Error404 from '../erros/404.js';
import { autores } from '../models/index.js';

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const getAuthor = autores.find();
      req.resultado = getAuthor;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      next(new Error404('Id do Autor não localizado.'));
    }
    try {
      const autorResultado = await autores.findById(id);
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new Error404('Id do Autor não localizado.'));
      }
    } catch (erro) {
      next(erro);
    }
  };
  
  
  static cadastrarAutor = async (req, res, next) => {
    let autor = new autores(req.body);

    try {
      const autorResultado = await autor.save();
  
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };
  

  static atualizarAutor = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      next(new Error404('Id do Autor não localizado.'));
    }
    try {
      const autorResultado = await autores.findById(id);
      if(autorResultado !== null) {
        await autores.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send({message: 'Autor atualizado com sucesso'});
      } else {
        next(new Error404('Id do Autor não localizado.'));
      }
    } catch (erro) {
      next(erro);
    }
  };
  
  static excluirAutor = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      next(new Error404('Id do Autor não localizado.'));
    }
    try {
      const autorResultado = await autores.findById(id);
      if(autorResultado !== null) {
        await autores.findByIdAndDelete(id);
        res.status(200).send({message: 'Autor removido com sucesso'});
      } else {
        next(new Error404('Id do Autor não localizado.'));
      }
    } catch (erro) {
      next(erro);
    }
  };
  

}

export default AutorController;