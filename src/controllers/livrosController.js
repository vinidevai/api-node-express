import mongoose from 'mongoose';
import Error404 from '../erros/404.js';
import { autores, livros } from '../models/index.js';

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const getBooks = livros.find();
      req.resultado = getBooks;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      next(new Error404('Id do Livro não localizado.'));
    }
    try {
      const livroResultados = await livros.findById(id);
      if (livroResultados !== null) {
        res.status(200).send(livroResultados);
      } else {
        next(new Error404('Id do Livro não localizado.'));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    let livro = new livros(req.body);
    let autorId = req.body.autor;
    if(!mongoose.isValidObjectId(autorId)) {
      next(new Error404('Id do Autor não localizado.'));
    }
    try {
      const livroResultado = await livro.save();
      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      next(new Error404('Id do Livro não localizado.'));
    }
    try {
      const livroEncontrado = await livros.findById(id);
      if(livroEncontrado !== null) {
        await livros.findByIdAndUpdate(id, {$set: req.body});
        res.status(200).send({message: 'Livro atualizado com sucesso'});
      } else {
        next(new Error404('Id do Livro não localizado.'));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      next(new Error404('Id do Livro não localizado.'));
    }
    try {
      const livroEncontrado = await livros.findById(id);
      if(livroEncontrado !== null) {
        await livros.findByIdAndDelete(id);
        res.status(200).send({message: 'Livro removido com sucesso'});
      } else {
        next(new Error404('Id do Livro não localizado.'));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static filtrarLivro = async (req, res, next) => {
    try {
      const { editora, titulo, autor, minPaginas, maxPaginas, minPreco, maxPreco } = req.query;
      const regEx = new RegExp(titulo, 'i');
      const search = {};

      if (minPaginas || maxPaginas) search.paginas = {};
      if (minPreco || maxPreco) search.preco = {};
      
      if (editora) search.editora = editora;
      if (titulo) search.titulo = regEx;
      if (minPaginas) search.paginas.$gte = minPaginas;
      if (maxPaginas) search.paginas.$lte = maxPaginas;
      if (minPreco) search.preco.$gte = minPreco;
      if (maxPreco) search.preco.$lte = maxPreco;
      if (autor) {
        const autorRegEx = new RegExp(autor, 'i');
        const autoresEncontrados = await autores.find({ nome: autorRegEx });

        if (autoresEncontrados.length === 0) {
          return res.status(200).send([]);
        }
        const autoresId = autoresEncontrados.map(autor => autor._id);
        search.autor = { $in: autoresId};
      }
      const livrosResultado = livros
        .find(search);

      req.resultado = livrosResultado;
      next();
    } catch (erro) {
      next(erro);
    }
  };



}

export default LivroController;