/**
 * @api {patch} /Esteiras/:idEsteira PatchEsteira
 * 
 * @apiName PatchEsteira
 * @apiGroup Esteira
 * @apiDescription Modifica qualquer atributo de uma esteira, salvando as alterações no banco de dados. Para que a modificação ocorra, deve ser enviado um JSON contendo o id da esteira a ser modificada e atributos com suas respectivas modificações.
 *
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiParam {Boolean} ativa True, se a esteira está ativa, false, se for o contrário.
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
 *		"mensagem": "Esteira atualizada",
 *		"modificacoes": {
 *			"ativa": true,
 *			"velocidade": false,
 *			"alias": false
 *		}
 * }
 *
 * @apiError AlteraçãoFalhou A atualização da esteira falhou.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "AlteraçãoFalhou"
 * }
 */
