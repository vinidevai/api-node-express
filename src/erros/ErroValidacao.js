import RequestError from './ErroRequisicao.js';

class ValidationError extends RequestError {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map(error => error.message)
      .join(' ');
    super(`Erro de validacao: ${mensagensErro}`);
  }
};

export default ValidationError;