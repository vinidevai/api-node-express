import RequestError from '../erros/ErroRequisicao.js';

async function pagination(req, res, next) {
  try {
    let { limite = 10, pagina = 1, ordenacao = '_id:-1' } = req.query;
    
    let [ filtro, ordem ] = ordenacao.split(':');
    if(!ordem) ordem = -1;
    if(filtro === 'id') filtro = '_id';
    
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);
    
    const resultado = req.resultado;
    
    if (limite > 0 && pagina > 0) {
      const resultadoPaginado = await resultado.find()
        .sort({[filtro]: ordem})
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();
      res.status(200).json(resultadoPaginado);
    } else {
      next(new RequestError());
    } 
  } catch (erro) {
    next(erro);
  }
}

export default pagination;