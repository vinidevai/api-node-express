import express from 'express';
import AutorController from '../controllers/autoresController.js';
import pagination from '../middlewares/pagination.js';

const router = express.Router();

router
  .get('/autores', AutorController.listarAutores, pagination)
  .get('/autores/:id', AutorController.listarAutorPorId)
  .post('/autores', AutorController.cadastrarAutor)
  .put('/autores/:id', AutorController.atualizarAutor)
  .delete('/autores/:id', AutorController.excluirAutor);

export default router;   