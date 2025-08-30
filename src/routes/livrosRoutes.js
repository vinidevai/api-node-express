import express from 'express';
import LivroController from '../controllers/livrosController.js';
import pagination from '../middlewares/pagination.js';

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros, pagination)
  .get('/livros/search', LivroController.filtrarLivro, pagination)
  .get('/livros/:id', LivroController.listarLivroPorId)
  .post('/livros', LivroController.cadastrarLivro)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.excluirLivro);

export default router;   