/**
 * @api {patch} /Esteiras/:idEsteira PatchEsteira
 * @apiGroup Esteira
 * @apiName PatchEsteira
 * @apiDescription Modifica qualquer atributo de uma esteira, salvando as alterações no banco de dados.
 *
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Boolean} ativa True, se quero a esteira ativa, false, caso contrário.
 * @apiParam {Number} velocidade Um número (1, 2 ou 3) que define a velocidade da esteira.
 * @apiParam {String} alias Novo nome que se deseja dar a esteira.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Object} modificacoes Objeto que indica as modificações que foram realizadas, se true o atributo foi modificado, se false não houve modificação.
 * 
 * @apiParamExample {json} Exemplo de request:
 * HTTP/1.1 200 OK
 * {
 *		"idEsteira": 10007,
 *		"ativa": false,
 *		"velocidade": undefined,
 *		"alias": undefined
 * }
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *		"mensagem": "Estado da esteira atualizado",
 *		"modificacoes": {
 *			"ativa": "true",
 *			"velocidade": "false",
 *			"alias": "false"
 *		}
 * }
 *
 * @apiError MudançaFalhou A atualização da esteira falhou.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "MudançaFalhou"
 * }
 */
