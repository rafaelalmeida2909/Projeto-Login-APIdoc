/**
 * @api {MongoClient.connect} mongodb+srv://<adiminName>:<password>@example-qlgsc.gcp.mongodb.net/test?retryWrites=true&w=majority Connect
 * 
 * @apiName Connect
 * @apiGroup Banco de Dados
 * @apiDescription Método para conexão com o banco de dados. A API usará o mongodb como base de dados no-SQL. Cada rota será implementada usando a framework expressjs, e dentro de cada rota haverá uma chamada para o objeto da base de dados. Com isso, em cada rota haverá a possibilidade de solicitar ou enviar novos dados para a base.
 *
 * @apiParam {Object} mongoClient Objeto de conexão do pacote mongodb.
 * @apiParam {Object} url Objeto contendo url de conexão com a base de dados.
 * @apiParam {Object} err Objeto de erro gerado quando a conexão não funciona.
 * @apiParam {Object} client Objeto do cliente, usado para acesso a base de dados desejada.
 * @apiParam {Object} db Variável para acesso as coleções da base de dados.
 * @apiSuccessExample Exemplo de conexão:
 * mongoClient = require('mongodb').MongoClient;
 * mongoClient.connect(url, (err, client)=>{
 *		if(err){
 *			console.log("Problema na conexão");
 *		}else{
 *			db = client.db("base-de-dados")
 *			...
 *		}
 * });
 */
