import ErroBase from './erroBase.js';

class RequestError extends ErroBase {
  constructor(message = 'Um ou mais dados fornecidos estao incorretos!') {
    super(message, 400);
  }
}

export default RequestError;