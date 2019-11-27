/**
 * @api {delete} /Esteiras/:idEsteira DeleteEsteira
 * 
 * @apiName DeleteEsteira
 * @apiGroup Esteira
 * @apiDescription Exclui uma esteira da base de dados.
 *
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idEsteira Devolve um string com o id da esteira excluída.
 * @apiSuccess {String} alias Nome amigável excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *		"mensagem": "Esteira excluída com sucesso.",
 *		"idEsteira": 10001,
 *		"alias": "EsteiraSetorB" 
 * }
 *
 * @apiError EsteiraNaoEncontrada A esteira com o id desejado, não foi encontrada.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *		"erro": "EsteiraNaoEncontrada"
 * }
 */
