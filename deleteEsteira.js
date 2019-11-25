/**
 * @api {delete} /Esteiras/:idEsteira Exclui uma esteira em produção.
 * 
 * @apiName DeleteEsteira
 * @apiGroup DeleteEsteira
 * 
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * 
 * @apiSuccess {String} mensagem Devolve um string com a mensagem de sucesso.
 * @apiSuccess {Number} idExcluído Devolve um string com o id da esteira excluída.
 * @apiSuccess {String} aliasExcluído Nome amigável excluído.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 * HTTP/1.1 200 OK
 * {
 *      "mensagem": "Esteira excluída com sucesso.",
 *      "idExcluído": 10001,
 *      "aliasExcluído": "EsteiraSetorB" 
 * }
 *
 * @apiError ExcecaoEsteiraNaoEncontrada A esteira com o id desejado, não foi encontrada.
 *
 * @apiErrorExample Exemplo de Erro:
 * HTTP/1.1 404 Not Found
 * {
 *      "erro": "ExcecaoEsteiraNaoEncontrada"
 * }
 */
