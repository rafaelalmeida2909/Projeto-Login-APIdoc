/**
 * @api {collection.InsertOne} db.collection("exemplo").insertOne(json,callback) Insert
 * 
 * @apiName Insert
 * @apiGroup Banco de Dados
 * @apiDescription Método para inserção de dados na base.
 *
 * @apiParam {Object} json Objeto que se almeja inserir na base de dados.
 * @apiParam {Object} err Objeto de erro gerado caso ocorra algum erro.
 * @apiParam {Object} result Objeto json modificado, referindo ao novo elemento adicionado a base de dados.
 * @apiParam {Object} res Objeto de resposta para o cliente da API.
 * @apiParamExample Exemplo de INSERT:
 * db.collection("exemplo").insertOne(json, (err, result)=>{
 *		if(err){
 *			...
 *		}else{
 *			res.send(...);
 *		}
 *})
 */
