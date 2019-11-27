/**
 * @api {collection.InsertOne} db.collection("exemplo").remove(json,callback) Remove
 * 
 * @apiName Remove
 * @apiGroup Banco de Dados
 * @apiDescription Método para busca de dados na base.
 *
 * @apiParam {Object} json Objeto contendo características dos objetos que se almejam remover.
 * @apiParam {Object} err Objeto de erro gerado caso ocorra algum erro.
 * @apiParam {Object} result Objeto(s) removidos(s).
 * @apiParam {Object} res Objeto de resposta para o cliente da API.
 * @apiParamExample Exemplo de DELETE:
 * json = {"atributo":"dado"};
 * db.collection("exemplo").remove(json, (err, result)=>{
 *		if(err){
 *			...
 *		}else{
 *			res.send(result);
 *		}
 *})
 */
