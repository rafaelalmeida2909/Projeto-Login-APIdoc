/**
 * @api {delete} /esteiras/:id/excluir Exclui uma esteira em produção.
 * @apiName DeleteEsteira
 * @apiGroup DeleteEsteira
 * @apiParam {Number} idE Identificador numérico único para uma esteira.
 * @apiSuccess {String} id Devolve um string com o id da esteira excluída.
 * 
 * @apiSuccessExample Exemplo de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "excluidoId" = "E10000" 
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