/**
 * @api {collection.InsertOne} db.collection("exemplo").find(json,callback) Find
 * 
 * @apiName Find
 * @apiGroup Banco de Dados
 * @apiDescription Método para busca de dados na base.
 *
 * @apiParam {Object} json Objeto contendo características do objeto que se almeja encontrar.
 * @apiParam {Object} err Objeto de erro gerado caso ocorra algum erro.
 * @apiParam {Object} result Objeto(s) encontrado(s).
 * @apiParam {Object} res Objeto de resposta para o cliente da API.
 * @apiParamExample Exemplo de FIND:
 * json = {"atributo":"dado"};
 * db.collection("exemplo").findOne(json, (err, result)=>{
 *		if(err){
 *			...
 *		}else{
 *			res.send(result);
 *		}
 *})
 */
