import ErroBase from './erroBase.js';

class Error404 extends ErroBase {
  constructor(message = 'Pagina nao encontrada!') {
    super(message, 404);
  }
}

export default Error404;