import mongoose from 'mongoose';
import ErroBase from '../erros/erroBase.js';
import RequestError from '../erros/ErroRequisicao.js';
import ValidationError from '../erros/ErroValidacao.js';

// eslint-disable-next-line no-unused-vars
function manipulaErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new RequestError().sendResponse(res);
  } else if(erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendResponse(res);
  } else if(erro instanceof ErroBase) {
    erro.sendResponse(res);
  } else {
    new ErroBase().sendResponse(res);
  }
  
}

export default manipulaErros;