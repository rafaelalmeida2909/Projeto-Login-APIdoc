 /**
 * @api {post} /Esteiras PostEsteira
 * 
 * @apiName PostEsteira
 * @apiGroup Esteira
 * @apiDescription Cadastra uma esteira na base de dados, para isso deve ser enviado um JSON ao servidor indicando os atributos da nova esteira.
 *
 * @apiParam {String} alias Nome amigável para esteira.
 * @apiParam {Boolean} ativa True, se a esteira está ativa, false, se for o contrário.
 * @apiParam {Number} velocidade Pode conter 1, 2 ou 3 reprentando velocidades crescentes para a esteira.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiSuccess {Boolean} ativa Retorna true se a esteira está ativa, e false, caso contrário.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 201 Created
 * {
 *		"alias": "EsteiraDeCorte",
 *		"ativa": true,
 *		"velocidade": 2
 * }
 * 
 * @apiSuccessExample {json} Exemplo de retorno de Successo:
 * HTTP/1.1 200 OK
 * {    
 *		"mensagem": "Esteira cadastrada com sucesso.",
 *		"idEsteira": 10001,
 *		"ativa": true
 * }
 * 
 * @apiError CadastroInvalido Não foi possível criar uma esteira.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "CadastroInvalido"
 * }
 */
