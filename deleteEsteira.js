/**
 * @api {delete} /Excluir/Esteira/:idEsteira Exclui uma esteira em produção.
 * @apiName ExcluirEsteira
 * @apiGroup ExcluirEsteira
 * @apiParam {Number} idEsteira Identificador numérico único para uma esteira.
 * @apiSuccess {String} idExcluido Devolve um string com o id da esteira excluída.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "idExcluido" = "E10000" 
 *     }
 *
 * @apiError ExcecaoEsteiraNaoEncontrada A esteira com o id desejado, não foi encontrada.
 *
 * @apiErrorExample Exemplo de Erro:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "ExcecaoEsteiraNaoEncontrada"
 *     }
 */
